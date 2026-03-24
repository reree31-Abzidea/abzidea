import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  const [cat, setCat] = useState('')
  const [level, setLevel] = useState('tree')
  const [saleType, setSaleType] = useState('single')
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [price, setPrice] = useState('')
  const [derivToggle, setDerivToggle] = useState(false)

  const cats = [
    { icon:'💼', name:'비즈니스·사업' },
    { icon:'🎬', name:'콘텐츠' },
    { icon:'⚙️', name:'문제해결·업무' },
    { icon:'🤝', name:'사회·공공' },
    { icon:'📷', name:'일상·취미' },
  ]

  const levels = [
    { key:'seed', icon:'🌱', name:'씨앗 — Level 1', desc:'초기 단계의 생각, 문제 인식. 무료 공개.', badge:'무료 공개', bg:'#E1F5EE', color:'#085041' },
    { key:'sprout', icon:'🌿', name:'새싹 — Level 2', desc:'해결 방향과 구조가 잡힌 아이디어. 나무의 미리보기.', badge:'유료', bg:'#FAEEDA', color:'#BA7517' },
    { key:'tree', icon:'🌳', name:'나무 — Level 3', desc:'결과물 중심 완성된 아이디어. 즉시 실행 가능.', badge:'유료 (완성본)', bg:'#f5ede0', color:'#7a5c2e' },
  ]

  const saleTypes = [
    { key:'single', icon:'🔐', name:'단독 판매', desc:'1인에게만 판매' },
    { key:'limited', icon:'👥', name:'제한 판매', desc:'최대 N명까지' },
    { key:'unlimited', icon:'🌐', name:'무제한 판매', desc:'누구나 구매 가능' },
  ]

  const numPrice = parseInt(price.replace(/[^0-9]/g,'')) || 0
  const sellerNet = Math.round(numPrice * 0.7)

  return (
    <div style={{ background:'#f7f6f2', minHeight:'100vh' }}>
      <div style={{ background:'#fff', borderBottom:'0.5px solid rgba(0,0,0,0.08)', padding:'28px 40px' }}>
        <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:24, marginBottom:6 }}>아이디어 등록하기</div>
        <div style={{ fontSize:14, color:'#888780', fontWeight:300 }}>당신의 아이디어가 누군가의 미래를 바꿀 수 있습니다.</div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 280px', gap:24, padding:'28px 40px', maxWidth:1100, margin:'0 auto' }}>
        <div>
          {/* 카테고리 */}
          <div style={{ background:'#fff', borderRadius:16, border:'0.5px solid rgba(0,0,0,0.08)', padding:24, marginBottom:16 }}>
            <div style={{ fontSize:15, fontWeight:500, marginBottom:16 }}>📂 카테고리 선택</div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:10 }}>
              {cats.map(c => (
                <div key={c.name} onClick={() => setCat(c.name)} style={{ border: cat===c.name ? '0.5px solid #1D9E75' : '0.5px solid rgba(0,0,0,0.08)', borderRadius:10, padding:'14px 10px', cursor:'pointer', textAlign:'center', background: cat===c.name ? '#E1F5EE' : '#f7f6f2' }}>
                  <div style={{ fontSize:20, marginBottom:6 }}>{c.icon}</div>
                  <div style={{ fontSize:11, fontWeight:500, color: cat===c.name ? '#085041' : '#1c1c1a' }}>{c.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 기본 정보 */}
          <div style={{ background:'#fff', borderRadius:16, border:'0.5px solid rgba(0,0,0,0.08)', padding:24, marginBottom:16 }}>
            <div style={{ fontSize:15, fontWeight:500, marginBottom:16 }}>✏️ 기본 정보</div>
            {[
              { label:'아이디어 제목', placeholder:'예: 중소기업 온보딩 자동화 시스템', state:title, setState:setTitle, hint:'🌱 씨앗 단계에서 공개됩니다' },
              { label:'한 줄 요약', placeholder:'구매자가 첫눈에 이해할 수 있는 한 문장', state:summary, setState:setSummary, hint:'🌱 씨앗 단계에서 공개됩니다' },
            ].map(field => (
              <div key={field.label} style={{ marginBottom:16 }}>
                <div style={{ fontSize:13, fontWeight:500, marginBottom:7 }}>{field.label} <span style={{ color:'#E24B4A', fontSize:11 }}>필수</span></div>
                <input value={field.state} onChange={e=>field.setState(e.target.value)} placeholder={field.placeholder} style={{ width:'100%', padding:'11px 14px', border:'0.5px solid rgba(0,0,0,0.08)', borderRadius:10, fontSize:14, outline:'none', fontFamily:'inherit' }} />
                <div style={{ fontSize:12, color:'#888780', marginTop:5 }}>{field.hint}</div>
              </div>
            ))}
            <div style={{ marginBottom:16 }}>
              <div style={{ fontSize:13, fontWeight:500, marginBottom:7 }}>문제 인식 <span style={{ color:'#E24B4A', fontSize:11 }}>필수</span></div>
              <textarea placeholder="어떤 문제를 발견했나요?" style={{ width:'100%', padding:'11px 14px', border:'0.5px solid rgba(0,0,0,0.08)', borderRadius:10, fontSize:14, outline:'none', fontFamily:'inherit', resize:'vertical', minHeight:90 }} />
              <div style={{ fontSize:12, color:'#888780', marginTop:5 }}>🌱 씨앗 단계에서 무료 공개됩니다</div>
            </div>
            <div style={{ marginBottom:16 }}>
              <div style={{ fontSize:13, fontWeight:500, marginBottom:7 }}>해결 방향 <span style={{ color:'#E24B4A', fontSize:11 }}>필수</span></div>
              <textarea placeholder="어떤 방식으로 문제를 해결하나요?" style={{ width:'100%', padding:'11px 14px', border:'0.5px solid rgba(0,0,0,0.08)', borderRadius:10, fontSize:14, outline:'none', fontFamily:'inherit', resize:'vertical', minHeight:90 }} />
              <div style={{ fontSize:12, color:'#888780', marginTop:5 }}>🌿 새싹 단계에서 일부 공개</div>
            </div>
            <div>
              <div style={{ fontSize:13, fontWeight:500, marginBottom:7 }}>완성 기획 내용</div>
              <textarea placeholder="구체적인 실행 방법, 수치, 검증 내용 등 완성된 내용을 작성해주세요." style={{ width:'100%', padding:'11px 14px', border:'0.5px solid rgba(0,0,0,0.08)', borderRadius:10, fontSize:14, outline:'none', fontFamily:'inherit', resize:'vertical', minHeight:120 }} />
              <div style={{ fontSize:12, color:'#888780', marginTop:5 }}>🌳 나무 단계에서 구매 후 공개</div>
            </div>
          </div>

          {/* 레벨 선택 */}
          <div style={{ background:'#fff', borderRadius:16, border:'0.5px solid rgba(0,0,0,0.08)', padding:24, marginBottom:16 }}>
            <div style={{ fontSize:15, fontWeight:500, marginBottom:16 }}>🌱 레벨 선택</div>
            {levels.map(lv => (
              <div key={lv.key} onClick={() => setLevel(lv.key)} style={{ display:'flex', gap:14, padding:16, borderRadius:12, cursor:'pointer', marginBottom:10, border: level===lv.key ? `0.5px solid ${lv.color}` : '0.5px solid rgba(0,0,0,0.08)', background: level===lv.key ? lv.bg : '#f7f6f2' }}>
                <div style={{ fontSize:24, flexShrink:0, marginTop:2 }}>{lv.icon}</div>
                <div>
                  <div style={{ fontSize:14, fontWeight:500, marginBottom:4 }}>{lv.name}</div>
                  <div style={{ fontSize:12, color:'#888780', marginBottom:8 }}>{lv.desc}</div>
                  <span style={{ fontSize:11, fontWeight:500, background: level===lv.key ? '#fff' : lv.bg, color:lv.color, padding:'3px 10px', borderRadius:100 }}>{lv.badge}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 판매 방식 + 가격 */}
          <div style={{ background:'#fff', borderRadius:16, border:'0.5px solid rgba(0,0,0,0.08)', padding:24, marginBottom:16 }}>
            <div style={{ fontSize:15, fontWeight:500, marginBottom:16 }}>💰 판매 방식 & 가격</div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10, marginBottom:20 }}>
              {saleTypes.map(st => (
                <div key={st.key} onClick={() => setSaleType(st.key)} style={{ padding:14, borderRadius:12, cursor:'pointer', textAlign:'center', border: saleType===st.key ? '0.5px solid #1c1c1a' : '0.5px solid rgba(0,0,0,0.08)', background: saleType===st.key ? '#1c1c1a' : '#f7f6f2' }}>
                  <div style={{ fontSize:20, marginBottom:6 }}>{st.icon}</div>
                  <div style={{ fontSize:12, fontWeight:500, color: saleType===st.key ? '#fff' : '#1c1c1a', marginBottom:4 }}>{st.name}</div>
                  <div style={{ fontSize:11, color: saleType===st.key ? 'rgba(255,255,255,0.5)' : '#888780' }}>{st.desc}</div>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize:13, fontWeight:500, marginBottom:7 }}>판매 가격 <span style={{ color:'#E24B4A', fontSize:11 }}>필수</span></div>
              <div style={{ position:'relative' }}>
                <span style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', color:'#888780', fontSize:14 }}>₩</span>
                <input value={price} onChange={e=>setPrice(e.target.value)} placeholder="150,000" style={{ width:'100%', padding:'11px 14px 11px 32px', border:'0.5px solid rgba(0,0,0,0.08)', borderRadius:10, fontSize:14, outline:'none', fontFamily:'inherit' }} />
              </div>
              {numPrice > 0 && (
                <div style={{ background:'#f7f6f2', borderRadius:10, padding:14, marginTop:12 }}>
                  {[['판매 가격',`₩${numPrice.toLocaleString()}`],['플랫폼 수수료 (30%)',`-₩${Math.round(numPrice*0.3).toLocaleString()}`],['투자펀드 적립 (10%)',`-₩${Math.round(numPrice*0.1).toLocaleString()}`]].map(([l,v]) => (
                    <div key={l} style={{ display:'flex', justifyContent:'space-between', fontSize:13, marginBottom:6 }}>
                      <span style={{ color:'#888780' }}>{l}</span><span>{v}</span>
                    </div>
                  ))}
                  <div style={{ display:'flex', justifyContent:'space-between', fontSize:14, fontWeight:500, paddingTop:10, borderTop:'0.5px solid rgba(0,0,0,0.08)' }}>
                    <span>내 실수령액 (70%)</span>
                    <span style={{ color:'#1D9E75' }}>₩{sellerNet.toLocaleString()}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 파생 설정 */}
          <div style={{ background:'#fff', borderRadius:16, border:'0.5px solid rgba(0,0,0,0.08)', padding:24, marginBottom:16 }}>
            <div style={{ fontSize:15, fontWeight:500, marginBottom:16 }}>🔄 파생 아이디어 설정</div>
            <div onClick={() => setDerivToggle(!derivToggle)} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 16px', background:'#f7f6f2', borderRadius:10, cursor:'pointer', marginBottom:12, border:'0.5px solid rgba(0,0,0,0.08)' }}>
              <div>
                <div style={{ fontSize:14, fontWeight:500 }}>다른 아이디어에서 영감을 받았습니다</div>
                <div style={{ fontSize:12, color:'#888780' }}>원본 연결 시 판매 수익의 15%가 원작자에게 공유됩니다</div>
              </div>
              <div style={{ width:40, height:22, borderRadius:100, background: derivToggle ? '#1D9E75' : 'rgba(0,0,0,0.15)', position:'relative', flexShrink:0 }}>
                <div style={{ width:18, height:18, borderRadius:'50%', background:'#fff', position:'absolute', top:2, left: derivToggle ? 20 : 2, transition:'left 0.2s' }}></div>
              </div>
            </div>
            {derivToggle && (
              <input placeholder="원본 아이디어 제목을 검색하세요" style={{ width:'100%', padding:'11px 14px', border:'0.5px solid rgba(0,0,0,0.08)', borderRadius:10, fontSize:14, outline:'none', fontFamily:'inherit' }} />
            )}
          </div>
        </div>

        {/* 사이드바 */}
        <div>
          <div style={{ background:'#fff', borderRadius:16, border:'0.5px solid rgba(0,0,0,0.08)', padding:20, marginBottom:14 }}>
            <div style={{ fontSize:13, fontWeight:500, marginBottom:14, paddingBottom:10, borderBottom:'0.5px solid rgba(0,0,0,0.08)' }}>📋 등록 체크리스트</div>
            {[['카테고리 선택', !!cat],['아이디어 제목', !!title],['한 줄 요약', !!summary],['레벨 선택', true],['판매 방식', true],['가격 설정', !!price]].map(([label, done]) => (
              <div key={label} style={{ display:'flex', alignItems:'center', gap:8, fontSize:13, marginBottom:8 }}>
                <div style={{ width:18, height:18, borderRadius:'50%', background: done ? '#E1F5EE' : '#f7f6f2', color: done ? '#1D9E75' : '#888780', display:'flex', alignItems:'center', justifyContent:'center', fontSize:10, border: done ? 'none' : '0.5px solid rgba(0,0,0,0.08)' }}>{done ? '✓' : '○'}</div>
                <span style={{ color: done ? '#1c1c1a' : '#888780' }}>{label}</span>
              </div>
            ))}
          </div>
          <div style={{ background:'#fff', borderRadius:16, border:'0.5px solid rgba(0,0,0,0.08)', padding:20, position:'sticky', top:80 }}>
            <div style={{ fontSize:13, fontWeight:500, marginBottom:12 }}>👀 미리보기</div>
            <div style={{ background:'#f7f6f2', borderRadius:12, padding:16 }}>
              <span style={{ fontSize:10, fontWeight:500, background:'#E1F5EE', color:'#085041', padding:'3px 10px', borderRadius:100, display:'inline-block', marginBottom:10 }}>🌳 나무</span>
              <div style={{ fontSize:14, fontWeight:500, lineHeight:1.4, color:'#1c1c1a', marginBottom:6 }}>{title || '아이디어 제목을 입력해주세요'}</div>
              <div style={{ fontSize:12, color:'#888780', lineHeight:1.5 }}>{summary || '한 줄 요약이 여기 표시됩니다'}</div>
            </div>
            <div style={{ background:'#FAEEDA', borderRadius:10, padding:14, marginTop:14 }}>
              <div style={{ fontSize:12, fontWeight:500, color:'#BA7517', marginBottom:5 }}>💡 잘 팔리는 팁</div>
              <div style={{ fontSize:12, color:'#BA7517', opacity:0.85, lineHeight:1.5 }}>제목은 구체적일수록 좋아요. "마케팅 아이디어"보다 "인스타 팔로워 1만명 달성 전략"이 훨씬 잘 팔립니다.</div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div style={{ background:'#fff', borderTop:'0.5px solid rgba(0,0,0,0.08)', padding:'20px 40px', display:'flex', alignItems:'center', justifyContent:'space-between', position:'sticky', bottom:0 }}>
        <div style={{ fontSize:13, color:'#888780' }}>* 등록된 아이디어는 타임스탬프로 자동 보호됩니다</div>
        <div style={{ display:'flex', gap:10 }}>
          <button style={{ padding:'11px 24px', borderRadius:100, border:'0.5px solid rgba(0,0,0,0.08)', background:'#fff', fontSize:14, cursor:'pointer' }}>임시저장</button>
          <button onClick={() => navigate('/')} style={{ padding:'11px 28px', borderRadius:100, border:'none', background:'#1c1c1a', color:'#fff', fontSize:14, fontWeight:500, cursor:'pointer' }}>등록하기 →</button>
        </div>
      </div>
    </div>
  )
}
