from pathlib import Path

# Fix CTASection
cta = Path("src/components/CTASection.tsx")
t = cta.read_text(encoding="utf-8")
t = t.replace(
    '<motion.div className="container mx-auto px-6 md:px-12 relative z-10">',
    '<motion.div className="container mx-auto px-6 md:px-12 relative z-10">'.replace("motion.", ""),
)
# simpler: read and fix known bad patterns
t = cta.read_text(encoding="utf-8")
lines = t.splitlines()
out = []
for i, line in enumerate(lines):
    if i == len(lines) - 3 and "</motion.div>" in line and "container" in lines[i - 10]:
        pass
    out.append(line)
cta.write_text(t.replace(
    '          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">',
    '          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">',
).replace(
    "      </motion.div>\n    </section>",
    "      </motion.div>\n    </section>".replace("motion.", "", 1),
), encoding="utf-8")
