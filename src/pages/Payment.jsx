import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Payment() {
  const navigate = useNavigate()
  const [payMethod, setPayMethod] = useState('kakao')
  const [allChecked, setAllChecked] = useState(false)
  const [paying, setPaying] = useState(false)

  const methods = [
    { key:'kakao', icon:'💛', name:'카카오페이', bg:'#FEE500', textColor:'#1c1c1a' },
    { key:'toss', icon:'💙', name:'토스페이', bg:'#0064FF', textColor:'#fff' },
    { key:'card', icon:'💳', name:'신용·체크카드', bg:'#1c1c1a', textColor:'#fff' },
  ]

  const cur = methods.find(m => m.key === payMethod)

  const doPay = () => {
    setPaying(true)
    setTimeout(() => navigate('/payment/complete'), 1500)
  }

  return (
    <div style={{ background:'#f7f6f2', minHeight:'100vh' }}>
      <div style={{ fontSize:13, color:'#888780', padding:'14px 40px', background:'#fff', borderBottom:'0.5px solid rgba(0,0,0,0.08)' }}>
        아이디어 탐색 › 상세 › <span style={{ color:'#1c1c1a' }}>결제</span>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 320px', gap:28, padding:'36px 40px', maxWidth:1100, margin:'0 auto' }}>
        <div>
          {/* 주문 아이디어 */}
          <div style={{ background:'#fff', borderRadius:16, border:'0.5px solid rgba(0,0,0,0.08)', padding:24, marginBottom:16 }}>
            <div style={{ fontSize:15, fontWeight:500, marginBottom:18, paddingBottom:12, borderBottom:'0.5px solid rgba(0,0,0,0.08)', display:'flex', alignItems:'center', gap:8 }}>
              <span style={{ width:22, height:22, borderRadius:'50%', background:'#1c1c1a', color:'#fff', fontSize:11, display:'flex', alignItems:'center', justifyContent:'center', fontWeight:600 }}>1</span>주문 아이디어 확인
            </div>
            <div style={{ display:'flex', gap:14 }}>
              <div style={{ width:72, height:54, borderRadius:10, background:'linear-gradient(135deg,#667eea,#764ba2)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, flexShrink:0 }}>📊</div>
              <div>
                <div style={{ fontSize:14, fontWeight:500, marginBottom:6, lineHeight:1.4 }}>중소기업 온보딩 자동화 시스템 기획서</div>
                <div style={{ fontSize:12, color:'#888780', marginBottom:8, fontWeight:300 }}>신입사원 온보딩 프로세스를 90% 자동화하는 완성 기획서</div>
                <div style={{ display:'flex', gap:6 }}>
                  {[['💼 비즈니스·사업','#f7f6f2','#888780'],['🌳 나무','#f5ede0','#7a5c2e'],['🔐 단독 판매','#fce4ec','#c2185b']].map(([t,bg,c]) => (
                    <span key={t} style={{ fontSize:11, fontWeight:500, background:bg, color:c, padding:'3px 8px', borderRadius:100 }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 결제 수단 */}
          <div style={{ background:'#fff', borderRadius:16, border:'0.5px solid rgba(0,0,0,0.08)', padding:24, marginBottom:16 }}>
            <div style={{ fontSize:15, fontWeight:500, marginBottom:18, paddingBottom:12, borderBottom:'0.5px solid rgba(0,0,0,0.08)', display:'flex', alignItems:'center', gap:8 }}>
              <span style={{ width:22, height:22, borderRadius:'50%', background:'#1c1c1a', color:'#fff', fontSize:11, display:'flex', alignItems:'center', justifyContent:'center', fontWeight:600 }}>2</span>결제 수단 선택
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10 }}>
              {methods.map(m => (
                <div key={m.key} onClick={() => setPayMethod(m.key)} style={{ border: payMethod===m.key ? `0.5px solid ${m.bg}` : '0.5px solid rgba(0,0,0,0.08)', borderRadius:12, padding:'14px 10px', cursor:'pointer', textAlign:'center', background: payMethod===m.key ? m.bg : '#f7f6f2', transition:'all 0.15s' }}>
                  <div style={{ fontSize:22, marginBottom:6 }}>{m.icon}</div>
                  <div style={{ fontSize:12, fontWeight:500, color: payMethod===m.key ? m.textColor : '#1c1c1a' }}>{m.name}</div>
                </div>
              ))}
            </div>
            {payMethod==='card' && (
              <div style={{ marginTop:16 }}>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:12 }}>
                  <div style={{ gridColumn:'1/-1' }}>
                    <div style={{ fontSize:12, fontWeight:500, color:'#888780', marginBottom:6 }}>카드 번호</div>
                    <input placeholder="0000 - 0000 - 0000 - 0000" style={{ width:'100%', padding:'11px 14px', border:'0.5px solid rgba(0,0,0,0.08)', borderRadius:10, fontSize:14, outline:'none', fontFamily:'inherit' }} />
                  </div>
                  <div>
                    <div style={{ fontSize:12, fontWeight:500, color:'#888780', marginBottom:6 }}>유효기간</div>
                    <input placeholder="MM / YY" style={{ width:'100%', padding:'11px 14px', border:'0.5px solid rgba(0,0,0,0.08)', borderRadius:10, fontSize:14, outline:'none', fontFamily:'inherit' }} />
                  </div>
                  <div>
                    <div style={{ fontSize:12, fontWeight:500, color:'#888780', marginBottom:6 }}>CVC</div>
                    <input placeholder="000" style={{ width:'100%', padding:'11px 14px', border:'0.5px solid rgba(0,0,0,0.08)', borderRadius:10, fontSize:14, outline:'none', fontFamily:'inherit' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 고지사항 */}
          <div style={{ background:'#FAEEDA', borderRadius:12, padding:'16px 18px', marginBottom:16, border:'0.5px solid rgba(186,117,23,0.2)' }}>
            <div style={{ fontSize:12, fontWeight:500, color:'#BA7517', marginBottom:8 }}>⚠️ 구매 전 반드시 확인하세요</div>
            {['디지털 콘텐츠 특성상 구매 완료 후 환불이 불가합니다.','플랫폼은 아이디어의 사업성·수익성을 보장하지 않습니다.','구매한 아이디어를 제3자에게 재판매하거나 공유할 수 없습니다.','단독 판매 아이디어는 구매자 1인에게만 사용권이 부여됩니다.'].map(txt => (
              <div key={txt} style={{ fontSize:12, color:'#BA7517', lineHeight:1.5, marginBottom:4, opacity:0.9 }}>· {txt}</div>
            ))}
          </div>

          {/* 약관 */}
          <div style={{ background:'#fff', borderRadius:16, border:'0.5px solid rgba(0,0,0,0.08)', padding:24 }}>
            <div style={{ fontSize:15, fontWeight:500, marginBottom:18, paddingBottom:12, borderBottom:'0.5px solid rgba(0,0,0,0.08)', display:'flex', alignItems:'center', gap:8 }}>
              <span style={{ width:22, height:22, borderRadius:'50%', background:'#1c1c1a', color:'#fff', fontSize:11, display:'flex', alignItems:'center', justifyContent:'center', fontWeight:600 }}>3</span>약관 동의
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:12, cursor:'pointer' }} onClick={() => setAllChecked(!allChecked)}>
              <input type="checkbox" checked={allChecked} onChange={()=>{}} style={{ width:15, height:15, accentColor:'#1D9E75' }} />
              <label style={{ fontSize:13, fontWeight:500, cursor:'pointer' }}>전체 동의</label>
            </div>
            <div style={{ height:'0.5px', background:'rgba(0,0,0,0.08)', marginBottom:12 }}></div>
            {['[필수] 구매 이용약관에 동의합니다','[필수] 환불 불가 정책에 동의합니다','[필수] 아이디어 재판매·공유 금지에 동의합니다','[선택] 파생 아이디어 수익공유 15% 동의'].map(txt => (
              <div key={txt} style={{ display:'flex', alignItems:'center', gap:8, marginBottom:8, cursor:'pointer' }}>
                <input type="checkbox" checked={allChecked} onChange={()=>{}} style={{ width:15, height:15, accentColor:'#1D9E75' }} />
                <label style={{ fontSize:13, color: txt.includes('필수') ? '#1c1c1a' : '#888780', cursor:'pointer' }}>{txt}</label>
              </div>
            ))}
          </div>
        </div>

        {/* 결제 요약 */}
        <div>
          <div style={{ background:'#fff', borderRadius:16, border:'0.5px solid rgba(0,0,0,0.08)', padding:24, position:'sticky', top:80 }}>
            <div style={{ fontSize:14, fontWeight:500, marginBottom:16, paddingBottom:12, borderBottom:'0.5px solid rgba(0,0,0,0.08)' }}>결제 요약</div>
            {[['아이디어 가격','₩150,000'],['할인','₩0'],['부가세 (포함)','₩13,636']].map(([l,v]) => (
              <div key={l} style={{ display:'flex', justifyContent:'space-between', fontSize:13, marginBottom:10 }}>
                <span style={{ color:'#888780' }}>{l}</span><span>{v}</span>
              </div>
            ))}
            <div style={{ height:'0.5px', background:'rgba(0,0,0,0.08)', margin:'12px 0' }}></div>
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:16, fontWeight:500, marginBottom:20 }}>
              <span>최종 결제금액</span><span style={{ color:'#1D9E75' }}>₩150,000</span>
            </div>
            <button onClick={doPay} disabled={paying} style={{ width:'100%', padding:14, borderRadius:100, border:'none', background: cur.bg, color:cur.textColor, fontSize:14, fontWeight:500, cursor:'pointer', marginBottom:8, opacity: paying ? 0.7 : 1 }}>
              {paying ? '결제 처리 중...' : `${cur.name}로 결제하기`}
            </button>
            <button style={{ width:'100%', padding:11, borderRadius:100, border:'0.5px solid rgba(0,0,0,0.08)', background:'transparent', fontSize:13, cursor:'pointer', color:'#888780' }}>← 돌아가기</button>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:6, fontSize:11, color:'#888780', marginTop:12 }}>🔒 SSL 보안 결제 · 개인정보 암호화</div>
          </div>
        </div>
      </div>
    </div>
  )
}
