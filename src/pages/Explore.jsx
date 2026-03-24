import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const allIdeas = [
  { id:1, cat:'비즈니스·사업', catIcon:'💼', level:'씨앗', title:'동네 카페 공동 구독 멤버십 모델', desc:'여러 동네 카페를 하나의 구독권으로 이용하는 로컬 카페 연합 멤버십 아이디어', price:'무료', free:true, views:142, sale:'무제한' },
  { id:2, cat:'콘텐츠', catIcon:'🎬', level:'새싹', title:'직장인 15분 마이크로 러닝 커리큘럼', desc:'출퇴근 시간을 활용한 체계적 학습 프레임워크 및 콘텐츠 구조 설계안', price:'₩49,000', free:false, views:89, sale:'단독' },
  { id:3, cat:'문제해결·업무', catIcon:'⚙️', level:'나무', title:'중소기업 온보딩 자동화 시스템 기획서', desc:'신입사원 온보딩 프로세스를 90% 자동화하는 완성된 시스템 설계 및 실행 매뉴얼', price:'₩150,000', free:false, views:203, sale:'단독' },
  { id:4, cat:'사회·공공', catIcon:'🤝', level:'씨앗', title:'지역 소상공인 공동 SNS 마케팅 협력 모델', desc:'골목 상권 소상공인들이 비용을 나눠 공동 운영하는 마케팅 협력 구조', price:'무료', free:true, views:67, sale:'무제한' },
  { id:5, cat:'일상·취미', catIcon:'📷', level:'새싹', title:'취미 클래스 구독 플랫폼 비즈니스 모델', desc:'월 구독료로 다양한 오프라인 취미 클래스를 자유롭게 이용하는 서비스 기획안', price:'₩35,000', free:false, views:55, sale:'제한' },
  { id:6, cat:'비즈니스·사업', catIcon:'💼', level:'나무', title:'반려동물 건강 기록 자동화 앱 사업 기획서', desc:'수의사 방문 기록, 예방접종, 식단을 AI로 분석하고 맞춤 리포트를 제공하는 완성 기획서', price:'₩120,000', free:false, views:178, sale:'단독' },
]

const levelBadge = (lv) => {
  if(lv==='씨앗') return { bg:'#E1F5EE', color:'#085041', icon:'🌱' }
  if(lv==='새싹') return { bg:'#FAEEDA', color:'#BA7517', icon:'🌿' }
  return { bg:'#f5ede0', color:'#7a5c2e', icon:'🌳' }
}

export default function Explore() {
  const [filterLevel, setFilterLevel] = useState('전체')
  const [filterCat, setFilterCat] = useState('전체')

  const levels = ['전체','씨앗','새싹','나무']
  const cats = ['전체','비즈니스·사업','콘텐츠','문제해결·업무','사회·공공','일상·취미']

  const filtered = allIdeas.filter(idea => {
    const levelOk = filterLevel==='전체' || idea.level===filterLevel
    const catOk = filterCat==='전체' || idea.cat===filterCat
    return levelOk && catOk
  })

  return (
    <div style={{ background:'#f7f6f2', minHeight:'100vh' }}>
      {/* 페이지 헤더 */}
      <div style={{ background:'#fff', padding:'32px 40px', borderBottom:'0.5px solid rgba(0,0,0,0.08)' }}>
        <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:28, marginBottom:6 }}>아이디어 탐색</div>
        <div style={{ fontSize:14, color:'#888780', fontWeight:300 }}>다양한 분야의 아이디어를 발견하고, 당신의 다음 도전을 찾아보세요.</div>
      </div>

      {/* 검색 + 등록 */}
      <div style={{ background:'#fff', borderBottom:'0.5px solid rgba(0,0,0,0.08)', padding:'16px 40px', display:'flex', gap:12 }}>
        <div style={{ flex:1, display:'flex', alignItems:'center', gap:8, background:'#f7f6f2', borderRadius:100, padding:'10px 16px', border:'0.5px solid rgba(0,0,0,0.08)' }}>
          <span style={{ color:'#888780' }}>🔍</span>
          <input placeholder="어떤 아이디어를 찾고 계신가요?" style={{ border:'none', background:'transparent', fontSize:14, outline:'none', width:'100%' }} />
        </div>
        <Link to="/register" style={{ background:'#1D9E75', color:'#fff', padding:'10px 22px', borderRadius:100, fontSize:13, fontWeight:500, textDecoration:'none', whiteSpace:'nowrap', display:'flex', alignItems:'center' }}>+ 아이디어 등록</Link>
      </div>

      {/* 레벨 필터 */}
      <div style={{ background:'#fff', borderBottom:'0.5px solid rgba(0,0,0,0.08)', padding:'12px 40px', display:'flex', gap:8, alignItems:'center' }}>
        <span style={{ fontSize:12, color:'#888780' }}>레벨</span>
        {levels.map(lv => (
          <button key={lv} onClick={() => setFilterLevel(lv)} style={{
            padding:'6px 16px', borderRadius:100, fontSize:13, cursor:'pointer', border:'0.5px solid rgba(0,0,0,0.08)',
            background: filterLevel===lv ? '#1c1c1a' : '#fff',
            color: filterLevel===lv ? '#fff' : '#888780',
          }}>{lv==='씨앗'?'🌱 씨앗':lv==='새싹'?'🌿 새싹':lv==='나무'?'🌳 나무':lv}</button>
        ))}
      </div>

      <div style={{ display:'flex', padding:'24px 40px', gap:24, maxWidth:1100, margin:'0 auto' }}>
        {/* 사이드바 */}
        <div style={{ width:200, flexShrink:0 }}>
          <div style={{ background:'#fff', borderRadius:14, border:'0.5px solid rgba(0,0,0,0.08)', padding:20 }}>
            <div style={{ fontSize:11, fontWeight:600, color:'#888780', letterSpacing:1.5, textTransform:'uppercase', marginBottom:12 }}>카테고리</div>
            {cats.map(cat => (
              <div key={cat} onClick={() => setFilterCat(cat)} style={{
                padding:'8px 10px', borderRadius:8, cursor:'pointer', fontSize:13, marginBottom:2,
                background: filterCat===cat ? '#E1F5EE' : 'transparent',
                color: filterCat===cat ? '#085041' : '#1c1c1a',
                fontWeight: filterCat===cat ? 500 : 400,
              }}>{cat}</div>
            ))}
          </div>
        </div>

        {/* 목록 */}
        <div style={{ flex:1 }}>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:16, alignItems:'center' }}>
            <div style={{ fontSize:13, color:'#888780' }}>총 <strong style={{ color:'#1c1c1a' }}>{filtered.length}개</strong>의 아이디어</div>
            <select style={{ fontSize:13, color:'#888780', border:'0.5px solid rgba(0,0,0,0.08)', borderRadius:8, padding:'6px 12px', background:'#fff', outline:'none', cursor:'pointer' }}>
              <option>최신순</option><option>인기순</option><option>가격 낮은순</option>
            </select>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:14 }}>
            {filtered.map(idea => {
              const badge = levelBadge(idea.level)
              return (
                <Link to={`/idea/${idea.id}`} key={idea.id} style={{ background:'#fff', border:'0.5px solid rgba(0,0,0,0.08)', borderRadius:14, padding:20, textDecoration:'none', display:'block', transition:'transform 0.15s' }}
                  onMouseEnter={e=>e.currentTarget.style.transform='translateY(-2px)'}
                  onMouseLeave={e=>e.currentTarget.style.transform=''}>
                  <div style={{ display:'flex', justifyContent:'space-between', marginBottom:12 }}>
                    <span style={{ fontSize:11, color:'#888780', background:'#f7f6f2', padding:'4px 10px', borderRadius:100 }}>{idea.catIcon} {idea.cat}</span>
                    <span style={{ fontSize:11, fontWeight:500, background:badge.bg, color:badge.color, padding:'4px 10px', borderRadius:100 }}>{badge.icon} {idea.level}</span>
                  </div>
                  <div style={{ fontSize:14, fontWeight:500, marginBottom:6, lineHeight:1.5, color:'#1c1c1a' }}>{idea.title}</div>
                  <div style={{ fontSize:12, color:'#888780', lineHeight:1.6, marginBottom:14, fontWeight:300, display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden' }}>{idea.desc}</div>
                  <div style={{ paddingTop:12, borderTop:'0.5px solid rgba(0,0,0,0.08)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <span style={{ fontSize:13, fontWeight:500, color: idea.free ? '#1D9E75' : '#1c1c1a' }}>{idea.free ? '🔓 무료' : '🔒 '+idea.price}</span>
                    <div style={{ display:'flex', gap:8, fontSize:11, color:'#888780' }}>
                      <span>👁 {idea.views}</span>
                      <span>by 김○○</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
