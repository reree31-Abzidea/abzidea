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

export default function Invest() {
  return (
    <div style={{ background:'#fff' }}>
      {/* 히어로 */}
      <div style={{ background:'#1c1c1a', padding:'72px 40px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:6, background:'rgba(29,158,117,0.15)', color:'#1D9E75', padding:'6px 16px', borderRadius:100, fontSize:12, fontWeight:500, marginBottom:24 }}>
          <span style={{ width:6, height:6, borderRadius:'50%', background:'#1D9E75', display:'inline-block', animation:'pulse 2s infinite' }}></span>실시간 업데이트
        </div>
        <h1 style={{ fontFamily:'Noto Serif KR, serif', fontSize:38, fontWeight:400, color:'#fff', lineHeight:1.3, marginBottom:16 }}>
          아이디어가 만든 수익이<br /><span style={{ color:'#1D9E75' }}>다시 창작자에게</span> 돌아옵니다
        </h1>
        <p style={{ fontSize:15, color:'rgba(255,255,255,0.4)', marginBottom:48, fontWeight:300, lineHeight:1.7 }}>Abzidea는 플랫폼 수수료의 일부를 스타트업에 투자하고,<br />그 수익을 판매자에게 투명하게 환원합니다.</p>
        <div style={{ display:'flex', justifyContent:'center', maxWidth:800, margin:'0 auto' }}>
          {[['거래 건수','248','건'],['투자펀드','2485000','원'],['환원 누적','1250000','원'],['투자 스타트업','3','개사']].map(([label,target,suffix],i) => (
            <div key={label} style={{ flex:1, padding:'24px 20px', textAlign:'center', borderRight: i<3 ? '0.5px solid rgba(255,255,255,0.08)' : 'none' }}>
              <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:30, color: i%2===0 ? '#1D9E75' : '#fff', marginBottom:6 }}>
                <CountUp target={parseInt(target)} suffix={suffix} />
              </div>
              <div style={{ fontSize:12, color:'rgba(255,255,255,0.35)' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background:'#f7f6f2', padding:'10px 40px', fontSize:12, color:'#888780', display:'flex', alignItems:'center', gap:8 }}>
        <span style={{ width:6, height:6, borderRadius:'50%', background:'#1D9E75', display:'inline-block' }}></span>
        마지막 업데이트: 2025년 3월 21일 오후 2:35 · 매일 오전 9시 자동 업데이트
      </div>

      {/* 수수료 적립 */}
      <div style={{ padding:'64px 40px', maxWidth:1100, margin:'0 auto' }}>
        <div style={{ fontSize:11, fontWeight:600, color:'#1D9E75', letterSpacing:2, textTransform:'uppercase', marginBottom:10 }}>Fee Accumulation</div>
        <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:28, marginBottom:8 }}>수수료 적립 현황</div>
        <div style={{ fontSize:14, color:'#888780', fontWeight:300, marginBottom:36, lineHeight:1.7 }}>거래가 발생할 때마다 수수료의 10%가 투자펀드로 자동 적립됩니다.</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16, marginBottom:28 }}>
          {[['💳','총 거래액','₩24,850,000','누적 거래 248건'],['🏦','플랫폼 수수료 (30%)','₩7,455,000','운영비 + 투자펀드'],['📈','투자펀드 적립액 (10%)','₩2,485,000','스타트업 투자 재원']].map(([icon,label,num,sub],i) => (
            <div key={label} style={{ background:'#f7f6f2', borderRadius:14, padding:22, border:'0.5px solid rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize:24, marginBottom:12 }}>{icon}</div>
              <div style={{ fontSize:12, color:'#888780', marginBottom:6 }}>{label}</div>
              <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:24, color: i===2 ? '#1D9E75' : '#1c1c1a', marginBottom:4 }}>{num}</div>
              <div style={{ fontSize:11, color:'#888780' }}>{sub}</div>
            </div>
          ))}
        </div>
        {/* 배분 바 */}
        <div style={{ background:'#fff', borderRadius:14, border:'0.5px solid rgba(0,0,0,0.08)', padding:22 }}>
          <div style={{ fontSize:13, fontWeight:500, marginBottom:16 }}>수수료 배분 구조</div>
          {[['판매자 수령','#1c1c1a',70],['플랫폼 운영비','#BA7517',20],['투자펀드 적립','#1D9E75',10]].map(([label,color,pct]) => (
            <div key={label} style={{ display:'flex', alignItems:'center', gap:0, marginBottom:12 }}>
              <div style={{ fontSize:12, color:'#888780', width:120, flexShrink:0 }}>{label}</div>
              <div style={{ flex:1, height:8, background:'#f7f6f2', borderRadius:100, overflow:'hidden', margin:'0 12px' }}>
                <div style={{ height:'100%', borderRadius:100, background:color, width:`${pct}%` }}></div>
              </div>
              <div style={{ fontSize:12, fontWeight:500, width:40, textAlign:'right', color }}>{pct}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* 거래 + 스타트업 */}
      <div style={{ background:'#f7f6f2', padding:'64px 40px' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ fontSize:11, fontWeight:600, color:'#1D9E75', letterSpacing:2, textTransform:'uppercase', marginBottom:10 }}>Investment Status</div>
          <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:28, marginBottom:36 }}>거래 현황 · 스타트업 투자</div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
            {/* 차트 */}
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
            {/* 스타트업 */}
            <div style={{ background:'#fff', borderRadius:14, border:'0.5px solid rgba(0,0,0,0.08)', padding:22 }}>
              <div style={{ display:'flex', justifyContent:'space-between', marginBottom:18 }}>
                <div style={{ fontSize:14, fontWeight:500 }}>🚀 투자 스타트업 현황</div>
                <span style={{ fontSize:11, background:'#E1F5EE', color:'#085041', padding:'3px 10px', borderRadius:100 }}>3개사</span>
              </div>
              {[['#e8f0fe','🤖','AI 교육 플랫폼 A사','에듀테크 · 시드','₩500,000','active'],['#e8f5e9','🌱','로컬 커머스 B사','커머스 · 시드','₩800,000','active'],['#FAEEDA','⚙️','HR 자동화 C사','HR테크 · 검토중','검토중','pending']].map(([bg,icon,name,desc,amt,status]) => (
                <div key={name} style={{ display:'flex', alignItems:'center', gap:14, padding:'12px', background:'#f7f6f2', borderRadius:12, marginBottom:10 }}>
                  <div style={{ width:40, height:40, borderRadius:10, background:bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, flexShrink:0 }}>{icon}</div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:13, fontWeight:500, marginBottom:2 }}>{name}</div>
                    <div style={{ fontSize:11, color:'#888780' }}>{desc}</div>
                  </div>
                  <div style={{ textAlign:'right' }}>
                    <div style={{ fontSize:13, fontWeight:500 }}>{amt}</div>
                    <div style={{ fontSize:11, color: status==='active' ? '#1D9E75' : '#BA7517', marginTop:2 }}>{status==='active' ? '▲ 투자중' : '◎ 검토중'}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 환원 현황 */}
      <div style={{ padding:'64px 40px', maxWidth:1100, margin:'0 auto' }}>
        <div style={{ fontSize:11, fontWeight:600, color:'#1D9E75', letterSpacing:2, textTransform:'uppercase', marginBottom:10 }}>Seller Returns</div>
        <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:28, marginBottom:36 }}>판매자 환원 현황</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16, marginBottom:36 }}>
          {[['총 환원 금액','₩1,250,000','↑ 이번 달 ₩320,000'],['환원 받은 판매자','47명','↑ 이번 달 12명 신규'],['1인 평균 환원액','₩26,595','↑ 전월 대비 +18%']].map(([label,num,sub]) => (
            <div key={label} style={{ background:'#f7f6f2', borderRadius:14, padding:20, borderLeft:'3px solid #1D9E75' }}>
              <div style={{ fontSize:12, color:'#888780', marginBottom:8 }}>{label}</div>
              <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:22, color:'#1c1c1a', marginBottom:4 }}>{num}</div>
              <div style={{ fontSize:11, color:'#1D9E75' }}>{sub}</div>
            </div>
          ))}
        </div>
        {/* 3단계 */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 40px 1fr 40px 1fr', alignItems:'center', gap:0 }}>
          {[['Step 01','💳','거래 발생','수수료의 10%가 투자펀드로 자동 적립'],['→'],['Step 02','🚀','스타트업 투자','적립된 펀드로 유망 스타트업에 투자'],['→'],['Step 03','💚','판매자 환원','투자 수익의 30%가 판매자에게 자동 배분']].map((item,i) => {
            if(item.length===1) return <div key={i} style={{ textAlign:'center', fontSize:20, color:'#888780' }}>→</div>
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
      <div style={{ background:'#1c1c1a', padding:'64px 40px', textAlign:'center' }}>
        <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:28, color:'#fff', marginBottom:16 }}>우리는 <span style={{ color:'#1D9E75' }}>모든 것을 공개</span>합니다</div>
        <div style={{ fontSize:14, color:'rgba(255,255,255,0.4)', marginBottom:40, fontWeight:300, lineHeight:1.8 }}>Abzidea는 플랫폼의 모든 수익 흐름을 투명하게 공개합니다.</div>
        <div style={{ display:'flex', justifyContent:'center', gap:40, flexWrap:'wrap' }}>
          {[['📊','실시간 거래 현황'],['🏦','수수료 배분 내역'],['🚀','투자 스타트업 공개'],['💚','환원 금액 전체 공개'],['🔐','블록체인 기록']].map(([icon,text]) => (
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
    </div>
  )
}
