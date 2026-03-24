import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function MyPage() {
  const [nav, setNav] = useState('dashboard')
  const navItems = [
    { key:'dashboard', icon:'🏠', label:'대시보드' },
    { key:'ideas', icon:'💡', label:'내 아이디어', badge:3 },
    { key:'purchased', icon:'🛒', label:'구매한 아이디어', badge:2 },
    { key:'earnings', icon:'💰', label:'수익 현황' },
    { key:'settings', icon:'⚙️', label:'설정' },
  ]

  return (
    <div style={{ background:'#f7f6f2', minHeight:'100vh' }}>
      <div style={{ display:'grid', gridTemplateColumns:'220px 1fr', gap:24, padding:'28px 40px', maxWidth:1100, margin:'0 auto' }}>
        {/* 사이드바 */}
        <div style={{ background:'#fff', borderRadius:16, border:'0.5px solid rgba(0,0,0,0.08)', padding:24, height:'fit-content', position:'sticky', top:80 }}>
          <div style={{ textAlign:'center', marginBottom:20, paddingBottom:20, borderBottom:'0.5px solid rgba(0,0,0,0.08)' }}>
            <div style={{ width:54, height:54, borderRadius:'50%', background:'#E1F5EE', display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, fontWeight:500, color:'#085041', margin:'0 auto 10px' }}>홍</div>
            <div style={{ fontSize:15, fontWeight:500, marginBottom:3 }}>홍○○</div>
            <div style={{ fontSize:12, color:'#888780' }}>판매자 · 구매자</div>
            <div style={{ display:'inline-block', background:'#E1F5EE', color:'#085041', fontSize:11, padding:'3px 10px', borderRadius:100, marginTop:6 }}>✅ 정직한 창작자</div>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:2 }}>
            {navItems.map(item => (
              <div key={item.key} onClick={() => setNav(item.key)} style={{ display:'flex', alignItems:'center', gap:10, padding:'10px 12px', borderRadius:8, cursor:'pointer', fontSize:13, background: nav===item.key ? '#E1F5EE' : 'transparent', color: nav===item.key ? '#085041' : '#1c1c1a', fontWeight: nav===item.key ? 500 : 400 }}>
                <span>{item.icon}</span>{item.label}
                {item.badge && <span style={{ marginLeft:'auto', background:'#1D9E75', color:'#fff', fontSize:10, padding:'2px 7px', borderRadius:100 }}>{item.badge}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* 메인 */}
        <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
          {/* 수익 요약 */}
          <div style={{ background:'#1c1c1a', borderRadius:16, padding:28, display:'grid', gridTemplateColumns:'repeat(3,1fr)' }}>
            {[['내 총 수익','₩245,000','판매+파생+투자환원','green'],['이번 달 수익','₩160,500','전월 대비 +32%',''],['출금 가능 금액','₩210,000','출금 신청 →','']].map(([label,num,sub,color]) => (
              <div key={label} style={{ textAlign:'center', padding:'0 20px', borderRight:'0.5px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize:12, color:'rgba(255,255,255,0.4)', marginBottom:10 }}>{label}</div>
                <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:26, color: color==='green' ? '#1D9E75' : '#fff', marginBottom:4 }}>{num}</div>
                <div style={{ fontSize:11, color:'rgba(255,255,255,0.3)' }}>{sub}</div>
              </div>
            ))}
          </div>

          {/* 선순환 투자 배너 */}
          <Link to="/invest" style={{ background:'#E1F5EE', borderRadius:14, padding:'18px 22px', display:'flex', alignItems:'center', justifyContent:'space-between', border:'0.5px solid rgba(29,158,117,0.2)', textDecoration:'none', cursor:'pointer' }}>
            <div style={{ display:'flex', alignItems:'center', gap:14 }}>
              <div style={{ width:42, height:42, borderRadius:10, background:'#1D9E75', display:'flex', alignItems:'center', justifyContent:'center', fontSize:20 }}>📈</div>
              <div>
                <div style={{ fontSize:14, fontWeight:500, color:'#085041', marginBottom:4 }}>선순환 투자 현황 보기</div>
                <div style={{ fontSize:12, color:'#085041', opacity:0.7 }}>수수료 적립 현황 · 스타트업 투자 · 환원 수익은 홈페이지에서 확인</div>
              </div>
            </div>
            <div style={{ fontSize:18, color:'#1D9E75' }}>→</div>
          </Link>

          {/* 빠른 액션 */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
            {[['/register','💡','#E1F5EE','아이디어 등록하기','새 아이디어를 올리고 수익 만들기'],['/explore','🔍','#FAEEDA','아이디어 탐색하기','새로운 아이디어 발견하기']].map(([to,icon,bg,title,desc]) => (
              <Link key={to} to={to} style={{ background:'#fff', border:'0.5px solid rgba(0,0,0,0.08)', borderRadius:12, padding:16, textDecoration:'none', display:'flex', alignItems:'center', gap:12 }}>
                <div style={{ width:38, height:38, borderRadius:10, background:bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, flexShrink:0 }}>{icon}</div>
                <div>
                  <div style={{ fontSize:13, fontWeight:500, color:'#1c1c1a' }}>{title}</div>
                  <div style={{ fontSize:11, color:'#888780', marginTop:2 }}>{desc}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* 구매한 아이디어 */}
          <div style={{ background:'#fff', borderRadius:16, border:'0.5px solid rgba(0,0,0,0.08)', padding:24 }}>
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom:18 }}>
              <div style={{ fontSize:15, fontWeight:500 }}>🛒 구매한 아이디어</div>
              <div style={{ fontSize:13, color:'#888780', cursor:'pointer' }}>전체보기 →</div>
            </div>
            {[['linear-gradient(135deg,#667eea,#764ba2)','📊','중소기업 온보딩 자동화 시스템 기획서','🌳 나무 · ₩150,000 · 2025.03.21'],['linear-gradient(135deg,#f093fb,#f5576c)','📋','직장인 15분 마이크로 러닝 커리큘럼','🌿 새싹 · ₩49,000 · 2025.03.18']].map(([bg,icon,title,meta]) => (
              <div key={title} style={{ display:'flex', alignItems:'center', gap:14, padding:'12px 0', borderBottom:'0.5px solid rgba(0,0,0,0.08)' }}>
                <div style={{ width:48, height:38, borderRadius:8, background:bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:17, flexShrink:0 }}>{icon}</div>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:13, fontWeight:500, marginBottom:3 }}>{title}</div>
                  <div style={{ fontSize:11, color:'#888780' }}>{meta}</div>
                </div>
                <span style={{ fontSize:11, fontWeight:500, background:'#E1F5EE', color:'#085041', padding:'4px 10px', borderRadius:100 }}>🔓 열람 가능</span>
              </div>
            ))}
          </div>

          {/* 알림 */}
          <div style={{ background:'#fff', borderRadius:16, border:'0.5px solid rgba(0,0,0,0.08)', padding:24 }}>
            <div style={{ fontSize:15, fontWeight:500, marginBottom:18 }}>🔔 최근 알림</div>
            {[['김○○님이 내 아이디어에서 파생 아이디어를 등록했어요. ₩12,000 수익이 적립됩니다.','방금 전',true],['소상공인 AI 마케팅 SaaS 기획서가 판매 완료되었습니다. ₩140,000이 수익으로 적립됩니다.','어제',true],['이번 달 투자펀드 수익 환원금 ₩8,500이 지급되었습니다.','3일 전',false]].map(([text,time,isNew]) => (
              <div key={text} style={{ display:'flex', alignItems:'flex-start', gap:12, padding:'12px 0', borderBottom:'0.5px solid rgba(0,0,0,0.08)' }}>
                <div style={{ width:8, height:8, borderRadius:'50%', background: isNew ? '#1D9E75' : '#888780', marginTop:4, flexShrink:0 }}></div>
                <div>
                  <div style={{ fontSize:13, color:'#1c1c1a', lineHeight:1.5 }}>{text}</div>
                  <div style={{ fontSize:11, color:'#888780', marginTop:3 }}>{time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
