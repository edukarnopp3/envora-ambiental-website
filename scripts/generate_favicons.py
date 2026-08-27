from pathlib import Path

from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
PRIMARY = (15, 110, 86, 255)
MASTER_SIZE = 1024


def cubic(p0, p1, p2, p3, steps=320):
    points = []
    for index in range(steps + 1):
        t = index / steps
        mt = 1 - t
        x = mt**3 * p0[0] + 3 * mt**2 * t * p1[0] + 3 * mt * t**2 * p2[0] + t**3 * p3[0]
        y = mt**3 * p0[1] + 3 * mt**2 * t * p1[1] + 3 * mt * t**2 * p2[1] + t**3 * p3[1]
        points.append((x, y))
    return points


def to_canvas(point):
    x, y = point
    x = 100 + (x - 100) * 1.45
    return (x / 200 * MASTER_SIZE, y / 240 * MASTER_SIZE)


right = cubic((100, 10), (150, 40), (180, 110), (100, 230))
left = cubic((100, 230), (20, 110), (50, 40), (100, 10))
polygon = [to_canvas(point) for point in right + left]

master = Image.new("RGBA", (MASTER_SIZE, MASTER_SIZE), (0, 0, 0, 0))
ImageDraw.Draw(master).polygon(polygon, fill=PRIMARY)

resampling = Image.Resampling.LANCZOS
for size, filename in [
    (16, "favicon-16x16.png"),
    (32, "favicon-32x32.png"),
    (180, "apple-touch-icon.png"),
]:
    master.resize((size, size), resampling).save(PUBLIC / filename, "PNG", optimize=True)

master.resize((256, 256), resampling).save(
    PUBLIC / "favicon.ico",
    "ICO",
    sizes=[(16, 16), (32, 32), (48, 48), (64, 64)],
)
