import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function IdeaDetail() {
  const [tab, setTab] = useState('seed')
  const [purchased, setPurchased] = useState(false)
  const navigate = useNavigate()

  const tabs = [
    { key:'seed', label:'🌱 씨앗', sub:'무료 공개' },
    { key:'sprout', label:'🌿 새싹', sub:'미리보기' },
    { key:'tree', label:'🌳 나무', sub:'완성본 구매' },
  ]

  const tabStyle = (key) => ({
    flex:1, padding:'11px 8px', textAlign:'center', cursor:'pointer', fontSize:13, fontWeight:500,
    borderRight: key!=='tree' ? '0.5px solid rgba(0,0,0,0.08)' : 'none',
    background: tab===key ? (key==='seed'?'#E1F5EE':key==='sprout'?'#FAEEDA':'#f5ede0') : '#f7f6f2',
    color: tab===key ? (key==='seed'?'#085041':key==='sprout'?'#BA7517':'#7a5c2e') : '#888780',
  })

  return (
    <div style={{ background:'#f7f6f2', minHeight:'100vh' }}>
      <div style={{ fontSize:13, color:'#888780', padding:'14px 40px', borderBottom:'0.5px solid rgba(0,0,0,0.08)', background:'#fff' }}>
        아이디어 탐색 › 비즈니스·사업 › <span style={{ color:'#1c1c1a' }}>중소기업 온보딩 자동화 시스템</span>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 300px', gap:36, padding:'36px 40px', maxWidth:1100, margin:'0 auto' }}>
        <div>
          {/* 이미지 갤러리 */}
          <div style={{ borderRadius:16, overflow:'hidden', border:'0.5px solid rgba(0,0,0,0.08)', marginBottom:28 }}>
            <div style={{ background:'linear-gradient(135deg,#667eea,#764ba2)', height:280, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:12 }}>
              <div style={{ fontSize:48 }}>📊</div>
              <div style={{ fontSize:14, color:'rgba(255,255,255,0.8)' }}>온보딩 자동화 플로우 다이어그램</div>
              <div style={{ fontSize:12, color:'rgba(255,255,255,0.5)' }}>이미지 1 / 5 (구매 후 전체 공개)</div>
            </div>
            <div style={{ display:'flex', gap:8, padding:10, background:'#f7f6f2' }}>
              {['📊','📋','⚙️'].map((icon,i) => (
                <div key={i} style={{ width:60, height:44, borderRadius:8, background:`linear-gradient(135deg,${['#667eea,#764ba2','#f093fb,#f5576c','#4facfe,#00f2fe'][i]})`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:16, cursor:'pointer', border: i===0?'2px solid #1D9E75':'2px solid transparent' }}>{icon}</div>
              ))}
              {[0,1].map(i => (
                <div key={i} style={{ width:60, height:44, borderRadius:8, background:'#2a2a28', display:'flex', alignItems:'center', justifyContent:'center', fontSize:14, color:'rgba(255,255,255,0.4)', cursor:'pointer' }}>🔒</div>
              ))}
            </div>
          </div>

          {/* 헤더 */}
          <div style={{ marginBottom:24 }}>
            <div style={{ display:'flex', gap:8, marginBottom:14, flexWrap:'wrap' }}>
              <span style={{ fontSize:11, fontWeight:500, background:'#f7f6f2', color:'#888780', padding:'4px 12px', borderRadius:100 }}>💼 비즈니스·사업</span>
              <span style={{ fontSize:11, fontWeight:500, background:'#f5ede0', color:'#7a5c2e', padding:'4px 12px', borderRadius:100 }}>🌳 나무 · Level 3</span>
              <span style={{ fontSize:11, fontWeight:500, background:'#fce4ec', color:'#c2185b', padding:'4px 12px', borderRadius:100 }}>🔴 단독 1인 판매</span>
            </div>
            <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:24, fontWeight:500, lineHeight:1.4, marginBottom:14 }}>중소기업 온보딩 자동화 시스템 기획서</div>
            <div style={{ display:'flex', gap:16, fontSize:13, color:'#888780' }}>
              <span>👁 203회</span><span>❤️ 47명 관심</span><span>🖼 5장</span><span>📅 2025.03.10</span>
            </div>
          </div>

          {/* 레벨 탭 */}
          <div style={{ display:'flex', border:'0.5px solid rgba(0,0,0,0.08)', borderRadius:12, overflow:'hidden', marginBottom:24 }}>
            {tabs.map(t => (
              <div key={t.key} style={tabStyle(t.key)} onClick={() => setTab(t.key)}>
                {t.label}<span style={{ display:'block', fontSize:11, fontWeight:400, marginTop:2 }}>{t.sub}</span>
              </div>
            ))}
          </div>

          {/* 탭 컨텐츠 */}
          {tab==='seed' && (
            <div>
              <div style={{ fontSize:15, fontWeight:500, marginBottom:12, paddingBottom:10, borderBottom:'0.5px solid rgba(0,0,0,0.08)' }}>💡 문제 인식 (씨앗 — 무료 공개)</div>
              <div style={{ fontSize:14, color:'#888780', lineHeight:1.8, fontWeight:300, marginBottom:16 }}>
                중소기업에서 신입사원이 입사하면 담당자가 일일이 교육을 진행해야 합니다. 이 과정에서 담당자의 업무 시간이 평균 2주 이상 소모되고, 신입사원마다 교육 품질이 달라지는 문제가 반복됩니다.
              </div>
              <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
                {['#온보딩자동화','#중소기업HR','#업무효율화','#스타트업'].map(tag => (
                  <span key={tag} style={{ fontSize:12, color:'#888780', background:'#f7f6f2', padding:'5px 12px', borderRadius:100, border:'0.5px solid rgba(0,0,0,0.08)' }}>{tag}</span>
                ))}
              </div>
            </div>
          )}
          {tab==='sprout' && (
            <div>
              <div style={{ fontSize:15, fontWeight:500, marginBottom:12, paddingBottom:10, borderBottom:'0.5px solid rgba(0,0,0,0.08)' }}>🌿 해결 방향 미리보기</div>
              <div style={{ fontSize:14, color:'#888780', lineHeight:1.8, fontWeight:300, marginBottom:12 }}>자동화 온보딩 시스템은 크게 세 가지 모듈로 구성됩니다. 첫 번째는 입사 전 사전 안내 자동화, 두 번째는 입사 당일 체크리스트 자동 발송입니다...</div>
              <div style={{ position:'relative', height:160 }}>
                <div style={{ filter:'blur(5px)', userSelect:'none', fontSize:14, color:'#888780', lineHeight:1.8 }}>핵심 도구로는 Notion + Zapier + Slack을 연동하여 별도의 개발 없이 구현 가능합니다. 세부 자동화 플로우는 다음과 같습니다. 1단계에서는 지원자가 합격 통보를 받는 순간 자동으로 사전 안내 메일이 발송됩니다.</div>
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,rgba(255,255,255,0) 0%,rgba(255,255,255,0.97) 40%,#fff 100%)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-end', paddingBottom:16 }}>
                  <div style={{ fontSize:14, fontWeight:500, marginBottom:6 }}>🔒 완성본 구매 후 공개됩니다</div>
                  <button onClick={() => navigate('/payment/3')} style={{ padding:'10px 24px', borderRadius:100, background:'#7a5c2e', color:'#fff', border:'none', fontSize:13, cursor:'pointer' }}>🌳 완성본 구매 ₩150,000</button>
                </div>
              </div>
            </div>
          )}
          {tab==='tree' && (
            <div>
              <div style={{ fontSize:15, fontWeight:500, marginBottom:12, paddingBottom:10, borderBottom:'0.5px solid rgba(0,0,0,0.08)' }}>🌳 완성본 — 구매 후 공개</div>
              {purchased ? (
                <div style={{ fontSize:14, color:'#888780', lineHeight:1.8, fontWeight:300 }}>
                  ✅ 구매 완료! 전체 기획서, Notion 템플릿, Zapier 워크플로우, Slack 스크립트 20종, 적용 사례 2개사 후기가 포함된 47페이지 완성 매뉴얼입니다.
                </div>
              ) : (
                <div style={{ position:'relative', height:200 }}>
                  <div style={{ filter:'blur(6px)', userSelect:'none', fontSize:14, color:'#888780', lineHeight:1.8 }}>완성된 온보딩 자동화 시스템 전체 기획서입니다. Notion 템플릿, Zapier 워크플로우 설계도, Slack 메시지 스크립트 전문이 포함되어 있습니다. 총 47페이지 분량의 실행 매뉴얼로, 구매 즉시 적용 가능한 수준으로 완성되어 있습니다.</div>
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,rgba(255,255,255,0) 0%,rgba(255,255,255,0.97) 30%,#fff 100%)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-end', paddingBottom:20 }}>
                    <div style={{ fontSize:14, fontWeight:500, marginBottom:6 }}>🔒 단 1인에게만 판매되는 독점 아이디어</div>
                    <button onClick={() => navigate('/payment/3')} style={{ padding:'12px 28px', borderRadius:100, background:'#1c1c1a', color:'#fff', border:'none', fontSize:14, cursor:'pointer' }}>지금 구매하기 ₩150,000</button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 파생 안내 */}
          <div style={{ background:'#E1F5EE', borderRadius:12, padding:'16px 18px', margin:'24px 0', border:'0.5px solid rgba(29,158,117,0.2)' }}>
            <div style={{ fontSize:13, fontWeight:500, color:'#085041', marginBottom:5 }}>🔄 파생 아이디어 수익공유 제도</div>
            <div style={{ fontSize:12, color:'#085041', lineHeight:1.6, opacity:0.85 }}>이 아이디어에서 영감을 받아 새로운 아이디어를 등록하면, 판매 수익의 15%가 원작자에게 자동으로 공유됩니다.</div>
          </div>
        </div>

        {/* 구매 카드 */}
        <div>
          <div style={{ background:'#fff', borderRadius:16, border:'0.5px solid rgba(0,0,0,0.08)', padding:24, position:'sticky', top:80 }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:6, background:'#f5ede0', color:'#7a5c2e', padding:'5px 12px', borderRadius:100, fontSize:12, fontWeight:500, marginBottom:14 }}>🌳 나무 · 완성본</div>
            <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:28, marginBottom:4 }}>₩150,000</div>
            <div style={{ fontSize:12, color:'#888780', marginBottom:16 }}>단 1인에게만 판매되는 독점 아이디어</div>
            <div style={{ height:'0.5px', background:'rgba(0,0,0,0.08)', margin:'16px 0' }}></div>
            {[['판매 방식','단독 1인 판매'],['포함 이미지','🖼 5장'],['파생 수익공유','15%'],['등록일','2025.03.10']].map(([l,v]) => (
              <div key={l} style={{ display:'flex', justifyContent:'space-between', fontSize:13, marginBottom:10 }}>
                <span style={{ color:'#888780' }}>{l}</span>
                <span style={{ fontWeight:500 }}>{v}</span>
              </div>
            ))}
            <div style={{ height:'0.5px', background:'rgba(0,0,0,0.08)', margin:'16px 0' }}></div>
            <button onClick={() => navigate('/payment/3')} style={{ width:'100%', padding:14, borderRadius:100, border:'none', background:'#1c1c1a', color:'#fff', fontSize:14, fontWeight:500, cursor:'pointer', marginBottom:8 }}>🔒 지금 구매하기</button>
            <button style={{ width:'100%', padding:11, borderRadius:100, border:'0.5px solid rgba(0,0,0,0.08)', background:'transparent', fontSize:13, cursor:'pointer', color:'#888780' }}>♡ 관심 아이디어 저장</button>
            <div style={{ background:'#f7f6f2', borderRadius:12, padding:16, marginTop:16 }}>
              <div style={{ fontSize:11, fontWeight:600, color:'#888780', letterSpacing:1.5, textTransform:'uppercase', marginBottom:12 }}>판매자</div>
              <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                <div style={{ width:38, height:38, borderRadius:'50%', background:'#E1F5EE', display:'flex', alignItems:'center', justifyContent:'center', fontSize:14, fontWeight:500, color:'#085041' }}>박</div>
                <div>
                  <div style={{ fontSize:14, fontWeight:500 }}>박○○</div>
                  <div style={{ fontSize:12, color:'#888780' }}>HR · 조직문화 전문가</div>
                </div>
              </div>
              <div style={{ display:'flex', gap:14, marginTop:12 }}>
                {[['12','등록'],['8','판매완료'],['4.9','평점']].map(([n,l]) => (
                  <div key={l} style={{ textAlign:'center' }}>
                    <div style={{ fontSize:15, fontWeight:500 }}>{n}</div>
                    <div style={{ fontSize:11, color:'#888780' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
