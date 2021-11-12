import hashlib

try:
    from PIL import Image, ImageDraw
except (ImportError) as e:
    has_pillow = False
else:
    has_pillow = True


class Identicon:

    def __init__(self, hash):
        self._bytes = list(hash.to_bytes(16, "big"))
        print(self._bytes)

    @classmethod
    def from_identifier(cls, identifier):
        return cls(int(hashlib.md5(str(identifier).encode("utf-8")).hexdigest(), 16))

    def generate_bits(self):
        def _generate():
            for i in range(0, 16):
                hi = self._bytes[i] & 0xF0
                lo = self._bytes[i] & 0x0F

                yield hi >> 4
                yield lo

        return map(lambda x: x % 2 == 0, _generate())

    def generate_list(self):
        array = [False] * 25
        bits = self.generate_bits()

        for column in range(2, -1, -1):
            for row in range(0, 5):
                bit = next(bits)

                array[column + (row * 5)] = bit
                array[(4 - column) + (row * 5)] = bit

        return array

    def generate_matrix(self):
        list_ = self.generate_list()
        return [list_[i : i + 5] for i in range(0, 25, 5)]



identicon = Identicon.from_identifier("melvin")
print(identicon.generate_matrix())  # requires PIL