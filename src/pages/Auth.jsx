import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Auth() {
  const [tab, setTab] = useState('login')
  const [userType, setUserType] = useState('seller')
  const [pw, setPw] = useState('')
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const strength = pw.length === 0 ? 0 : pw.length < 6 ? 1 : pw.length < 10 ? 2 : 3
  const strengthLabel = ['','😟 너무 짧아요','😐 보통이에요','💪 안전해요'][strength]
  const strengthColor = ['','#E24B4A','#BA7517','#1D9E75'][strength]

  const userTypes = [
    { key:'seller', icon:'💡', name:'아이디어 판매자', desc:'내 아이디어로 수익 만들기' },
    { key:'buyer', icon:'🔍', name:'아이디어 구매자', desc:'좋은 아이디어 찾고 구매' },
    { key:'corp', icon:'🏢', name:'기업 담당자', desc:'사내 혁신 아이디어 발굴' },
    { key:'startup', icon:'🚀', name:'스타트업 창업자', desc:'창업 아이디어 탐색 공유' },
  ]

  if(success) return (
    <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'#f7f6f2' }}>
      <div style={{ textAlign:'center', maxWidth:400 }}>
        <div style={{ fontSize:52, marginBottom:16 }}>🎉</div>
        <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:22, fontWeight:500, marginBottom:10 }}>Abzidea에 오신 걸 환영합니다!</div>
        <div style={{ fontSize:14, color:'#888780', lineHeight:1.7, marginBottom:28, fontWeight:300 }}>회원가입이 완료되었어요.<br />이제 당신의 아이디어로 진짜 삶을 시작해보세요.</div>
        <button onClick={() => navigate('/explore')} style={{ width:'100%', padding:14, borderRadius:100, border:'none', background:'#1D9E75', color:'#fff', fontSize:15, fontWeight:500, cursor:'pointer' }}>아이디어 탐색하러 가기 →</button>
      </div>
    </div>
  )

  return (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:'100vh' }}>
      {/* 왼쪽 브랜드 */}
      <div style={{ background:'#1c1c1a', padding:48, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
        <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:20, color:'#fff' }}>Ab<span style={{ color:'#1D9E75' }}>zidea</span></div>
        <div>
          <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:32, color:'#fff', lineHeight:1.4, marginBottom:20 }}>당신의 아이디어가<br /><span style={{ color:'#1D9E75' }}>당신의 미래</span>입니다</div>
          <div style={{ fontSize:14, color:'rgba(255,255,255,0.4)', lineHeight:1.8, fontWeight:300 }}>아이디어를 자유롭게 나누고, 거래하고, 수익을 만드세요. 당신이 진정 원하는 삶을 향한 첫 걸음이 여기서 시작됩니다.</div>
        </div>
        <div style={{ display:'flex', gap:32 }}>
          {[['248건','누적 거래'],['₩2.4M','투자펀드'],['47명','환원 판매자']].map(([n,l]) => (
            <div key={l}>
              <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:22, color:'#fff', marginBottom:4 }}>{n}</div>
              <div style={{ fontSize:12, color:'rgba(255,255,255,0.35)' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 오른쪽 폼 */}
      <div style={{ background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', padding:'48px 56px' }}>
        <div style={{ width:'100%', maxWidth:360 }}>
          {/* 탭 */}
          <div style={{ display:'flex', background:'#f7f6f2', borderRadius:100, padding:4, marginBottom:28 }}>
            {[['login','로그인'],['signup','회원가입']].map(([key,label]) => (
              <div key={key} onClick={() => setTab(key)} style={{ flex:1, padding:'10px', textAlign:'center', borderRadius:100, fontSize:14, cursor:'pointer', fontWeight: tab===key ? 500 : 400, color: tab===key ? '#1c1c1a' : '#888780', background: tab===key ? '#fff' : 'transparent' }}>{label}</div>
            ))}
          </div>

          {/* 사용자 유형 (회원가입만) */}
          {tab==='signup' && (
            <div style={{ marginBottom:16 }}>
              <div style={{ fontSize:13, fontWeight:500, marginBottom:10 }}>어떤 목적으로 사용하실 건가요?</div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
                {userTypes.map(ut => (
                  <div key={ut.key} onClick={() => setUserType(ut.key)} style={{ border: userType===ut.key ? '0.5px solid #1D9E75' : '0.5px solid rgba(0,0,0,0.08)', borderRadius:12, padding:'12px 10px', cursor:'pointer', textAlign:'center', background: userType===ut.key ? '#E1F5EE' : '#f7f6f2' }}>
                    <div style={{ fontSize:20, marginBottom:5 }}>{ut.icon}</div>
                    <div style={{ fontSize:12, fontWeight:500, color: userType===ut.key ? '#085041' : '#1c1c1a', marginBottom:3 }}>{ut.name}</div>
                    <div style={{ fontSize:11, color:'#888780' }}>{ut.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 소셜 로그인 */}
          <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:20 }}>
            {[['💛','카카오로 '+(tab==='login'?'로그인':'가입')+'하기'],['G','Google로 '+(tab==='login'?'로그인':'가입')+'하기']].map(([icon,label]) => (
              <button key={label} style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10, padding:12, borderRadius:12, border:'0.5px solid rgba(0,0,0,0.08)', background:'#fff', fontSize:14, cursor:'pointer', fontFamily:'inherit' }}><span>{icon}</span>{label}</button>
            ))}
          </div>

          <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:20 }}>
            <div style={{ flex:1, height:'0.5px', background:'rgba(0,0,0,0.08)' }}></div>
            <div style={{ fontSize:12, color:'#888780' }}>또는 이메일로</div>
            <div style={{ flex:1, height:'0.5px', background:'rgba(0,0,0,0.08)' }}></div>
          </div>

          {/* 폼 */}
          {tab==='signup' && (
            <div style={{ marginBottom:14 }}>
              <div style={{ fontSize:13, fontWeight:500, marginBottom:7 }}>이름</div>
              <input placeholder="홍길동" style={{ width:'100%', padding:'11px 14px', border:'0.5px solid rgba(0,0,0,0.08)', borderRadius:10, fontSize:14, outline:'none', fontFamily:'inherit' }} />
            </div>
          )}
          <div style={{ marginBottom:14 }}>
            <div style={{ fontSize:13, fontWeight:500, marginBottom:7 }}>이메일</div>
            <input placeholder="example@email.com" style={{ width:'100%', padding:'11px 14px', border:'0.5px solid rgba(0,0,0,0.08)', borderRadius:10, fontSize:14, outline:'none', fontFamily:'inherit' }} />
          </div>
          <div style={{ marginBottom: tab==='signup' ? 14 : 20 }}>
            <div style={{ fontSize:13, fontWeight:500, marginBottom:7 }}>비밀번호</div>
            <input type="password" value={pw} onChange={e=>setPw(e.target.value)} placeholder="8자 이상 입력" style={{ width:'100%', padding:'11px 14px', border:'0.5px solid rgba(0,0,0,0.08)', borderRadius:10, fontSize:14, outline:'none', fontFamily:'inherit' }} />
            {tab==='signup' && pw.length > 0 && (
              <div style={{ marginTop:6 }}>
                <div style={{ display:'flex', gap:4, marginBottom:4 }}>
                  {[1,2,3].map(i => <div key={i} style={{ flex:1, height:3, borderRadius:100, background: i <= strength ? strengthColor : '#f7f6f2' }}></div>)}
                </div>
                <div style={{ fontSize:11, color:strengthColor }}>{strengthLabel}</div>
              </div>
            )}
          </div>

          {tab==='login' && (
            <div style={{ display:'flex', justifyContent:'flex-end', marginBottom:20 }}>
              <span style={{ fontSize:13, color:'#888780', cursor:'pointer' }}>비밀번호 찾기</span>
            </div>
          )}

          {tab==='signup' && (
            <div style={{ marginBottom:20 }}>
              {['[필수] 이용약관 및 개인정보 처리방침에 동의합니다','[필수] 만 14세 이상입니다','[선택] 마케팅 정보 수신에 동의합니다'].map(txt => (
                <div key={txt} style={{ display:'flex', alignItems:'center', gap:8, marginBottom:8 }}>
                  <input type="checkbox" style={{ width:15, height:15, accentColor:'#1D9E75' }} />
                  <label style={{ fontSize:13, color: txt.includes('필수') ? '#1c1c1a' : '#888780' }}>{txt}</label>
                </div>
              ))}
            </div>
          )}

          <button onClick={() => setSuccess(true)} style={{ width:'100%', padding:14, borderRadius:100, border:'none', background:'#1c1c1a', color:'#fff', fontSize:15, fontWeight:500, cursor:'pointer', marginBottom:16 }}>
            {tab==='login' ? '로그인' : '회원가입'}
          </button>
          <div style={{ textAlign:'center', fontSize:13, color:'#888780' }}>
            {tab==='login' ? '아직 계정이 없으신가요? ' : '이미 계정이 있으신가요? '}
            <span onClick={() => setTab(tab==='login'?'signup':'login')} style={{ color:'#1c1c1a', fontWeight:500, cursor:'pointer' }}>{tab==='login'?'회원가입':'로그인'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
