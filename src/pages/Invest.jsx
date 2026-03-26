import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CountUp({ target, suffix, duration=1500 }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start = Math.min(start + step, target)
      setVal(Math.floor(start))
      if(start >= target) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration])
  return <span>{val.toLocaleString()}{suffix}</span>
}

const bars = [
  { month:'10월', h:30 },{ month:'11월', h:45 },{ month:'12월', h:38 },
  { month:'1월', h:52 },{ month:'2월', h:65 },{ month:'3월', h:90, highlight:true },
]

const startups = [
  { id:1, icon:'🤖', bg:'#e8f0fe', name:'AI 교육 플랫폼 A사', desc:'에듀테크 · 시드 단계', detail:'초등학생 맞춤형 AI 튜터 서비스. 월 사용자 2,400명 확보', votes:142, pct:48 },
  { id:2, icon:'🌱', bg:'#e8f5e9', name:'로컬 커머스 B사', desc:'커머스 · 시드 단계', detail:'동네 소상공인 공동 배송 플랫폼. 서울 3개 구 파일럿 운영 중', votes:98, pct:33 },
  { id:3, icon:'⚙️', bg:'#FAEEDA', name:'HR 자동화 C사', desc:'HR테크 · 시드 단계', detail:'중소기업 채용·온보딩 자동화. 현재 고객사 12개사 계약', votes:57, pct:19 },
]

export default function Invest() {
  const [voted, setVoted] = useState(null)
  const [showVoteModal, setShowVoteModal] = useState(false)
  const [selectedStartup, setSelectedStartup] = useState(null)

  const currentFund = 32000000
  const targetFund = 50000000
  const progressPct = Math.round((currentFund / targetFund) * 100)
  const remaining = targetFund - currentFund

  const handleVoteClick = (startup) => {
    setSelectedStartup(startup)
    setShowVoteModal(true)
  }

  const handleVoteConfirm = () => {
    setVoted(selectedStartup.id)
    setShowVoteModal(false)
  }

  return (
    <div style={{ background:'#fff' }}>

      <div style={{ background:'#1c1c1a', padding:'64px 40px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:6, background:'rgba(29,158,117,0.15)', color:'#1D9E75', padding:'6px 16px', borderRadius:100, fontSize:12, fontWeight:500, marginBottom:24 }}>
          <span style={{ width:6, height:6, borderRadius:'50%', background:'#1D9E75', display:'inline-block' }}></span>
          실시간 업데이트
        </div>
        <h1 style={{ fontFamily:'Noto Serif KR, serif', fontSize:36, fontWeight:400, color:'#fff', lineHeight:1.3, marginBottom:16 }}>
          아이디어가 만든 수익이<br /><span style={{ color:'#1D9E75' }}>다시 창작자에게</span> 돌아옵니다
        </h1>
        <p style={{ fontSize:14, color:'rgba(255,255,255,0.4)', marginBottom:48, fontWeight:300, lineHeight:1.7 }}>
          Abzidea는 플랫폼 수수료의 일부를 스타트업에 투자하고,<br />그 수익을 판매자에게 투명하게 환원합니다.
        </p>
        <div style={{ display:'flex', justifyContent:'center', maxWidth:800, margin:'0 auto' }}>
          {[['거래 건수','248','건'],['투자펀드','32000000','원'],['환원 누적','1250000','원'],['선순환 멤버','47','명']].map(([label,target,suffix],i) => (
            <div key={label} style={{ flex:1, padding:'20px 16px', textAlign:'center', borderRight: i<3 ? '0.5px solid rgba(255,255,255,0.08)' : 'none' }}>
              <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:28, color: i%2===0 ? '#1D9E75' : '#fff', marginBottom:6 }}>
                <CountUp target={parseInt(target)} suffix={suffix} />
              </div>
              <div style={{ fontSize:12, color:'rgba(255,255,255,0.35)' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background:'#f7f6f2', padding:'10px 40px', fontSize:12, color:'#888780', display:'flex', alignItems:'center', gap:8 }}>
        <span style={{ width:6, height:6, borderRadius:'50%', background:'#1D9E75', display:'inline-block' }}></span>
        마지막 업데이트: 2025년 3월 25일 오전 9:00
      </div>

      {/* 1차 투자 목표 진행률 */}
      <div style={{ padding:'48px 40px', maxWidth:1100, margin:'0 auto' }}>
        <div style={{ fontSize:11, fontWeight:600, color:'#1D9E75', letterSpacing:2, textTransform:'uppercase', marginBottom:10 }}>Investment Goal</div>
        <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:28, marginBottom:8 }}>1차 투자 목표 진행 현황</div>
        <div style={{ fontSize:14, color:'#888780', fontWeight:300, marginBottom:32, lineHeight:1.7 }}>
          5천만원이 적립되면 판매자 투표를 통해 스타트업 투자를 실행합니다.<br />충분한 자금이 모이기 전까지는 절대 실행하지 않습니다.
        </div>

        <div style={{ background:'#1c1c1a', borderRadius:20, padding:'36px 40px', marginBottom:24 }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:24 }}>
            <div>
              <div style={{ fontSize:13, color:'rgba(255,255,255,0.4)', marginBottom:8 }}>현재 적립액</div>
              <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:42, color:'#1D9E75' }}>₩{currentFund.toLocaleString()}</div>
              <div style={{ fontSize:13, color:'rgba(255,255,255,0.3)', marginTop:6 }}>목표액 ₩{targetFund.toLocaleString()}</div>
            </div>
            <div style={{ textAlign:'right' }}>
              <div style={{ fontSize:13, color:'rgba(255,255,255,0.4)', marginBottom:8 }}>달성률</div>
              <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:42, color:'#fff' }}>{progressPct}%</div>
              <div style={{ fontSize:13, color:'rgba(255,255,255,0.3)', marginTop:6 }}>목표까지 ₩{remaining.toLocaleString()} 남음</div>
            </div>
          </div>
          <div style={{ height:16, background:'rgba(255,255,255,0.08)', borderRadius:100, overflow:'hidden', marginBottom:12 }}>
            <div style={{ height:'100%', width:`${progressPct}%`, background:'linear-gradient(90deg,#1D9E75,#2dd4a0)', borderRadius:100 }}></div>
          </div>
          <div style={{ display:'flex', justifyContent:'space-between', fontSize:12, color:'rgba(255,255,255,0.3)' }}>
            <span>₩0</span>
            <span style={{ color:'#1D9E75', fontWeight:500 }}>현재 {progressPct}%</span>
            <span>🎯 ₩5,000만원 (투자 실행)</span>
          </div>
          <div style={{ marginTop:20, padding:'14px 18px', background:'rgba(29,158,117,0.1)', borderRadius:12, border:'0.5px solid rgba(29,158,117,0.2)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <div style={{ fontSize:13, color:'rgba(255,255,255,0.6)' }}>📅 예상 달성일</div>
            <div style={{ fontSize:14, fontWeight:500, color:'#1D9E75' }}>2025년 6월 예상 · 이번 달 ₩3,200,000 적립됨</div>
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14 }}>
          {[
            { icon:'✅', title:'의미 있는 투자', desc:'스타트업에 실질적 도움이 되는 최소 금액' },
            { icon:'🚫', title:'희망고문 방지', desc:'소액으로 투자하는 척 하지 않는 진정성' },
            { icon:'🎯', title:'명확한 목표', desc:'판매자들의 참여 동기를 극대화합니다' },
            { icon:'🔒', title:'신뢰 구조', desc:'충분한 자금 전까지 절대 실행 안 함' },
          ].map((item,i) => (
            <div key={i} style={{ background:'#f7f6f2', borderRadius:12, padding:'18px 16px', border:'0.5px solid rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize:22, marginBottom:8 }}>{item.icon}</div>
              <div style={{ fontSize:13, fontWeight:500, marginBottom:5 }}>{item.title}</div>
              <div style={{ fontSize:11, color:'#888780', lineHeight:1.5 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 커뮤니티 투표 */}
      <div style={{ background:'#f7f6f2', padding:'48px 40px' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ fontSize:11, fontWeight:600, color:'#1D9E75', letterSpacing:2, textTransform:'uppercase', marginBottom:10 }}>Community Vote</div>
          <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:28, marginBottom:8 }}>판매자 투표로 스타트업을 선정합니다</div>
          <div style={{ fontSize:14, color:'#888780', fontWeight:300, marginBottom:8, lineHeight:1.7 }}>
            목표 달성 후 Abzidea파트너들이 직접 투표로 투자할 스타트업을 결정합니다.
          </div>
          <div style={{ background:'#FAEEDA', borderRadius:12, padding:'14px 18px', marginBottom:28, border:'0.5px solid rgba(186,117,23,0.2)', display:'flex', alignItems:'center', gap:12 }}>
            <span style={{ fontSize:18 }}>⏳</span>
            <div>
              <div style={{ fontSize:13, fontWeight:500, color:'#BA7517' }}>투표는 5천만원 달성 후 오픈됩니다</div>
              <div style={{ fontSize:12, color:'#BA7517', opacity:0.8 }}>현재 {progressPct}% 달성 · 지금은 후보 스타트업을 미리 확인해 보세요</div>
            </div>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
            {startups.map(startup => (
              <div key={startup.id} style={{ background:'#fff', borderRadius:16, border: voted===startup.id ? '1.5px solid #1D9E75' : '0.5px solid rgba(0,0,0,0.08)', padding:24, display:'flex', alignItems:'center', gap:20 }}>
                <div style={{ width:56, height:56, borderRadius:14, background:startup.bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:24, flexShrink:0 }}>{startup.icon}</div>
                <div style={{ flex:1 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:4 }}>
                    <div style={{ fontSize:15, fontWeight:500 }}>{startup.name}</div>
                    <span style={{ fontSize:11, color:'#888780', background:'#f7f6f2', padding:'2px 8px', borderRadius:100 }}>{startup.desc}</span>
                  </div>
                  <div style={{ fontSize:13, color:'#888780', marginBottom:12, fontWeight:300 }}>{startup.detail}</div>
                  <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                    <div style={{ flex:1, height:6, background:'#f7f6f2', borderRadius:100, overflow:'hidden' }}>
                      <div style={{ height:'100%', width:`${startup.pct}%`, background:'#1D9E75', borderRadius:100 }}></div>
                    </div>
                    <span style={{ fontSize:12, color:'#888780', whiteSpace:'nowrap' }}>{startup.votes}표 ({startup.pct}%)</span>
                  </div>
                </div>
                <div style={{ flexShrink:0 }}>
                  {voted === startup.id ? (
                    <div style={{ background:'#E1F5EE', color:'#085041', padding:'10px 20px', borderRadius:100, fontSize:13, fontWeight:500 }}>✅ 투표 완료</div>
                  ) : (
                    <button onClick={() => handleVoteClick(startup)} style={{ background: voted ? '#f7f6f2' : '#1c1c1a', color: voted ? '#888780' : '#fff', padding:'10px 20px', borderRadius:100, fontSize:13, fontWeight:500, border:'none', cursor: voted ? 'default' : 'pointer', fontFamily:'inherit' }}>
                      {voted ? '투표 마감' : '투표하기'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop:16, fontSize:12, color:'#888780', textAlign:'center' }}>
            * 투표는 1인 1표로 진행합니다
          </div>
        </div>
      </div>

      {/* 수수료 적립 */}
      <div style={{ padding:'48px 40px', maxWidth:1100, margin:'0 auto' }}>
        <div style={{ fontSize:11, fontWeight:600, color:'#1D9E75', letterSpacing:2, textTransform:'uppercase', marginBottom:10 }}>Fee Accumulation</div>
        <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:28, marginBottom:36 }}>수수료 적립 현황</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16, marginBottom:28 }}>
          {[['💳','총 거래액','₩24,850,000','누적 거래 248건'],['🏦','플랫폼 수수료 (20%)','₩4,970,000','운영비 + 투자펀드'],['📈','투자펀드 적립액 (10%)','₩2,485,000','선순환 투자 재원']].map(([icon,label,num,sub],i) => (
            <div key={label} style={{ background:'#f7f6f2', borderRadius:14, padding:22, border:'0.5px solid rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize:24, marginBottom:12 }}>{icon}</div>
              <div style={{ fontSize:12, color:'#888780', marginBottom:6 }}>{label}</div>
              <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:24, color: i===2 ? '#1D9E75' : '#1c1c1a', marginBottom:4 }}>{num}</div>
              <div style={{ fontSize:11, color:'#888780' }}>{sub}</div>
            </div>
          ))}
        </div>
        <div style={{ background:'#fff', borderRadius:14, border:'0.5px solid rgba(0,0,0,0.08)', padding:22 }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:6 }}>
            <div style={{ fontSize:13, fontWeight:500 }}>수수료 배분 구조</div>
            <span style={{ fontSize:11, background:'#E1F5EE', color:'#085041', padding:'3px 10px', borderRadius:100, fontWeight:500 }}>선순환 멤버 기준</span>
          </div>
          <div style={{ fontSize:12, color:'#888780', marginBottom:16 }}></div>
          {[['선순환 멤버 수령','#1c1c1a',70],['플랫폼 운영비','#BA7517',20],['투자펀드 적립','#1D9E75',10]].map(([label,color,pct]) => (
            <div key={label} style={{ display:'flex', alignItems:'center', gap:0, marginBottom:12 }}>
              <div style={{ fontSize:12, color:'#888780', width:140, flexShrink:0 }}>{label}</div>
              <div style={{ flex:1, height:8, background:'#f7f6f2', borderRadius:100, overflow:'hidden', margin:'0 12px' }}>
                <div style={{ height:'100%', borderRadius:100, background:color, width:`${pct}%` }}></div>
              </div>
              <div style={{ fontSize:12, fontWeight:500, width:40, textAlign:'right', color }}>{pct}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* 거래 + 스타트업 */}
      <div style={{ background:'#f7f6f2', padding:'48px 40px' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
            <div style={{ background:'#fff', borderRadius:14, border:'0.5px solid rgba(0,0,0,0.08)', padding:22 }}>
              <div style={{ display:'flex', justifyContent:'space-between', marginBottom:20 }}>
                <div style={{ fontSize:14, fontWeight:500 }}>📊 월별 거래 건수</div>
                <span style={{ fontSize:11, background:'#E1F5EE', color:'#085041', padding:'3px 10px', borderRadius:100 }}>2025년</span>
              </div>
              <div style={{ display:'flex', alignItems:'flex-end', gap:8, height:100, marginBottom:10 }}>
                {bars.map(b => (
                  <div key={b.month} style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:4 }}>
                    <div style={{ width:'100%', borderRadius:'4px 4px 0 0', background: b.highlight ? '#1D9E75' : '#E1F5EE', height:b.h }}></div>
                    <div style={{ fontSize:10, color:'#888780' }}>{b.month}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize:12, color:'#888780' }}>이번 달 <strong style={{ color:'#1c1c1a' }}>87건</strong> · 전월 대비 <strong style={{ color:'#1D9E75' }}>+38%</strong></div>
            </div>
            <div style={{ background:'#fff', borderRadius:14, border:'0.5px solid rgba(0,0,0,0.08)', padding:22 }}>
              <div style={{ display:'flex', justifyContent:'space-between', marginBottom:18 }}>
                <div style={{ fontSize:14, fontWeight:500 }}>🚀 투자 후보 스타트업</div>
                <span style={{ fontSize:11, background:'#FAEEDA', color:'#BA7517', padding:'3px 10px', borderRadius:100 }}>투표 대기중</span>
              </div>
              {startups.map(startup => (
                <div key={startup.id} style={{ display:'flex', alignItems:'center', gap:12, padding:'10px', background:'#f7f6f2', borderRadius:10, marginBottom:8 }}>
                  <div style={{ width:36, height:36, borderRadius:8, background:startup.bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:16, flexShrink:0 }}>{startup.icon}</div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:13, fontWeight:500, marginBottom:2 }}>{startup.name}</div>
                    <div style={{ fontSize:11, color:'#888780' }}>{startup.desc}</div>
                  </div>
                  <div style={{ fontSize:12, color:'#BA7517', fontWeight:500 }}>◎ 대기중</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 환원 현황 */}
      <div style={{ padding:'48px 40px', maxWidth:1100, margin:'0 auto' }}>
        <div style={{ fontSize:11, fontWeight:600, color:'#1D9E75', letterSpacing:2, textTransform:'uppercase', marginBottom:10 }}>Seller Returns</div>
        <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:28, marginBottom:36 }}>판매자 환원 현황</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16, marginBottom:32 }}>
          {[['총 환원 금액','₩1,250,000','↑ 이번 달 ₩320,000'],['환원 받은 판매자','47명','↑ 이번 달 12명 신규'],['1인 평균 환원액','₩26,595','↑ 전월 대비 +18%']].map(([label,num,sub]) => (
            <div key={label} style={{ background:'#f7f6f2', borderRadius:14, padding:20, borderLeft:'3px solid #1D9E75' }}>
              <div style={{ fontSize:12, color:'#888780', marginBottom:8 }}>{label}</div>
              <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:22, color:'#1c1c1a', marginBottom:4 }}>{num}</div>
              <div style={{ fontSize:11, color:'#1D9E75' }}>{sub}</div>
            </div>
          ))}
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 40px 1fr 40px 1fr', alignItems:'center' }}>
          {[['Step 01','💳','거래 발생','수수료의 10%가 투자펀드로 자동 적립'],null,['Step 02','🗳️','커뮤니티 투표','5천만원 달성 시 판매자 투표로 스타트업 선정'],null,['Step 03','💚','판매자 환원','투자 수익의 30%가 판매자에게 자동 배분']].map((item,i) => {
            if(!item) return <div key={i} style={{ textAlign:'center', fontSize:20, color:'#888780' }}>→</div>
            const [step,icon,title,desc] = item
            return (
              <div key={step} style={{ background:'#fff', borderRadius:14, border:'0.5px solid rgba(0,0,0,0.08)', padding:20, textAlign:'center' }}>
                <div style={{ fontSize:11, fontWeight:600, color:'#1D9E75', letterSpacing:1.5, marginBottom:10 }}>{step}</div>
                <div style={{ fontSize:28, marginBottom:10 }}>{icon}</div>
                <div style={{ fontSize:14, fontWeight:500, marginBottom:6 }}>{title}</div>
                <div style={{ fontSize:12, color:'#888780', lineHeight:1.6 }}>{desc}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 투명성 */}
      <div style={{ background:'#1c1c1a', padding:'56px 40px', textAlign:'center' }}>
        <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:28, color:'#fff', marginBottom:16 }}>우리는 <span style={{ color:'#1D9E75' }}>모든 것을 공개</span>합니다</div>
        <div style={{ fontSize:14, color:'rgba(255,255,255,0.4)', marginBottom:40, fontWeight:300, lineHeight:1.8 }}>Abzidea는 플랫폼의 모든 수익 흐름을 투명하게 공개합니다.</div>
        <div style={{ display:'flex', justifyContent:'center', gap:40, flexWrap:'wrap' }}>
          {[['📊','실시간 거래 현황'],['🏦','수수료 배분 내역'],['🗳️','커뮤니티 투표 결과'],['💚','환원 금액 전체 공개'],['🔐','블록체인 기록']].map(([icon,text]) => (
            <div key={text} style={{ textAlign:'center' }}>
              <div style={{ fontSize:28, marginBottom:8 }}>{icon}</div>
              <div style={{ fontSize:13, color:'rgba(255,255,255,0.5)' }}>{text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background:'#E1F5EE', padding:'40px', textAlign:'center' }}>
        <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:22, color:'#085041', marginBottom:10 }}>지금 아이디어를 등록하고 선순환의 주인공이 되세요</div>
        <div style={{ fontSize:13, color:'#085041', opacity:0.7, marginBottom:20 }}>당신의 아이디어가 스타트업을 키우고, 그 수익이 다시 당신에게 돌아옵니다</div>
        <Link to="/register" style={{ background:'#1D9E75', color:'#fff', padding:'12px 32px', borderRadius:100, fontSize:14, fontWeight:500, textDecoration:'none' }}>무료로 시작하기 →</Link>
      </div>

      <footer style={{ padding:'28px 40px', borderTop:'0.5px solid rgba(0,0,0,0.08)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:16 }}>Ab<span style={{ color:'#1D9E75' }}>zidea</span></div>
        <div style={{ fontSize:12, color:'#888780' }}>© 2025 Abzidea · 선순환 투자 현황은 매일 오전 9시 업데이트</div>
      </footer>

      {/* 투표 확인 모달 */}
      {showVoteModal && selectedStartup && (
        <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:1000 }}>
          <div style={{ background:'#fff', borderRadius:20, padding:32, maxWidth:400, width:'90%' }}>
            <div style={{ fontSize:32, textAlign:'center', marginBottom:16 }}>🗳️</div>
            <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:20, fontWeight:500, textAlign:'center', marginBottom:8 }}>투표 확인</div>
            <div style={{ fontSize:14, color:'#888780', textAlign:'center', marginBottom:24, lineHeight:1.6 }}>
              <strong style={{ color:'#1c1c1a' }}>{selectedStartup.name}</strong>에<br />투표하시겠습니까?<br />
              <span style={{ fontSize:12 }}>한 번 투표하면 변경이 불가합니다.</span>
            </div>
            <div style={{ display:'flex', gap:10 }}>
              <button onClick={() => setShowVoteModal(false)} style={{ flex:1, padding:12, borderRadius:100, border:'0.5px solid rgba(0,0,0,0.08)', background:'#fff', fontSize:14, cursor:'pointer', fontFamily:'inherit' }}>취소</button>
              <button onClick={handleVoteConfirm} style={{ flex:1, padding:12, borderRadius:100, border:'none', background:'#1D9E75', color:'#fff', fontSize:14, fontWeight:500, cursor:'pointer', fontFamily:'inherit' }}>투표하기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
