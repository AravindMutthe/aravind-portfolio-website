"use client";

import { Tile, Tag } from "@carbon/react";
import Reveal from "@/components/Reveal";
import { SKILL_PANELS, type SkillTile } from "@/components/data";

/** Single skill logo tile — Carbon Tile with the ORIGINAL official brand logo,
 *  always on a white backdrop, never recolored or filtered. */
function SkillTileCard({ tile }: { tile: SkillTile }) {
  return (
    <Tile className="skill-carbon-tile">
      <img src={tile.logo} alt={tile.alt} loading="lazy" />
      <span>{tile.name}</span>
    </Tile>
  );
}

/** Skills page: category panels with Carbon Tiles for logos and Carbon Tags
 *  for the "also" items. Each panel carries an honest proficiency level. */
export default function SkillsPanels() {
  return (
    <section className="block" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="skill-legend" aria-label="Proficiency legend">
          <span><b className="level-daily">● Daily driver</b> — used every day</span>
          <span><b className="level-prod">● Production experience</b> — shipped real systems</span>
          <span><b className="level-working">● Working knowledge</b> — can get productive fast</span>
        </div>
        <div className="skills-cats">
          {SKILL_PANELS.map((panel) => (
            <Reveal key={panel.title}>
              <div className="skill-panel">
                <h4>{panel.title}</h4>
                <p className="sp-sub">{panel.sub}</p>
                <span className="skill-level">{panel.level}</span>

                {panel.tiles && (
                  <div className="tile-grid">
                    {panel.tiles.map((t) => (
                      <SkillTileCard key={t.name} tile={t} />
                    ))}
                  </div>
                )}

                {panel.groups && (
                  <div className="model-groups">
                    {panel.groups.map((g) => (
                      <div key={g.label} className="model-group">
                        <div className="model-label">
                          <b>{g.label}</b>
                          <span>{g.caption}</span>
                        </div>
                        <div className="tile-grid">
                          {g.tiles.map((t) => (
                            <SkillTileCard key={`${g.label}-${t.name}`} tile={t} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {panel.also && (
                  <p className="sp-also">
                    <b>Also:</b>{" "}
                    {panel.also.split(",").map((s) => (
                      <Tag key={s.trim()} type="green" size="sm" className="also-tag">
                        {s.trim()}
                      </Tag>
                    ))}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
