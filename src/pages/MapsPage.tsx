import { Link } from 'react-router-dom'
import { maps } from '../data/maps'
import { GreekPolisMap } from '../components/maps/GreekPolisMap'
import { AlexanderMap } from '../components/maps/AlexanderMap'
import { RomanExpansionMap } from '../components/maps/RomanExpansionMap'
import { AfterRomeMap } from '../components/maps/AfterRomeMap'
import { CharlemagneMap } from '../components/maps/CharlemagneMap'
import { MedievalKingdomsMap } from '../components/maps/MedievalKingdomsMap'
import { CrusadesMap } from '../components/maps/CrusadesMap'
import { HolyRomanEmpireMap } from '../components/maps/HolyRomanEmpireMap'
import { Religion16cMap } from '../components/maps/Religion16cMap'
import { NapoleonMap } from '../components/maps/NapoleonMap'
import { Vienna1815Map } from '../components/maps/Vienna1815Map'
import { GermanUnificationMap } from '../components/maps/GermanUnificationMap'
import { Europe1914Map } from '../components/maps/Europe1914Map'
import { PostWW1Map } from '../components/maps/PostWW1Map'
import { WW2Map } from '../components/maps/WW2Map'
import { ColdWarMap } from '../components/maps/ColdWarMap'
import { EuropeTodayMap } from '../components/maps/EuropeTodayMap'
import './pages.css'
import './maps.css'

const mapComponents: Record<string, React.ComponentType> = {
  GreekPolis: GreekPolisMap,
  Alexander: AlexanderMap,
  RomanExpansion: RomanExpansionMap,
  AfterRome: AfterRomeMap,
  Charlemagne: CharlemagneMap,
  MedievalKingdoms: MedievalKingdomsMap,
  Crusades: CrusadesMap,
  HolyRomanEmpire: HolyRomanEmpireMap,
  Religion16c: Religion16cMap,
  Napoleon: NapoleonMap,
  Vienna1815: Vienna1815Map,
  GermanUnification: GermanUnificationMap,
  Europe1914: Europe1914Map,
  PostWW1: PostWW1Map,
  WW2: WW2Map,
  ColdWar: ColdWarMap,
  EuropeToday: EuropeTodayMap,
}

export function MapsPage() {
  return (
    <main className="page-main">
      <section className="part-hero">
        <div className="container">
          <span className="chip">Historical Maps</span>
          <h1 className="part-hero-title">历史地图</h1>
          <div className="part-hero-period">对应真实历史年代</div>
          <p className="part-hero-intro">
            以下历史地图标注真实的国家、政权边界与重要地点。地图按历史时期排列，
            已绘制的可直接查看，其余将在后续阶段陆续补齐。
          </p>
        </div>
      </section>

      <section className="maps-grid">
        <div className="container">
          <div className="maps-list">
            {maps.map((m) => {
              const Comp = mapComponents[m.component]
              return (
                <div className="map-card" key={m.id}>
                  <div className="map-figure">
                    {Comp ? (
                      <Comp />
                    ) : (
                      <div className="map-pending">
                        <span>地图绘制中</span>
                        <p>该地图将在后续阶段补齐</p>
                      </div>
                    )}
                  </div>
                  <div className="map-info">
                    <h3 className="map-title">{m.title}</h3>
                    <div className="map-period">{m.period}</div>
                    <p className="map-desc">{m.description}</p>
                    {m.lessonId && (
                      <Link to={`/lesson/${m.lessonId}`} className="map-link">
                        阅读相关课程 →
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
