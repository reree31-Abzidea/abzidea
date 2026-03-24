import React from 'react'
import { Link } from 'react-router-dom'

export default function PaymentComplete() {
  return (
    <div style={{ background:'#f7f6f2', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:40 }}>
      <div style={{ maxWidth:540, width:'100%', textAlign:'center' }}>
        <div style={{ width:80, height:80, borderRadius:'50%', background:'#E1F5EE', display:'flex', alignItems:'center', justifyContent:'center', fontSize:36, margin:'0 auto 24px' }}>🎉</div>
        <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:26, fontWeight:500, marginBottom:10 }}>결제가 완료되었습니다!</div>
        <div style={{ fontSize:14, color:'#888780', lineHeight:1.7, marginBottom:32, fontWeight:300 }}>아이디어 전체 내용이 공개되었어요.<br />마이페이지에서 언제든지 다시 확인할 수 있습니다.</div>

        <div style={{ background:'#fff', borderRadius:16, border:'0.5px solid rgba(0,0,0,0.08)', padding:24, textAlign:'left', marginBottom:20 }}>
          <div style={{ fontSize:11, fontWeight:600, color:'#888780', letterSpacing:1.5, textTransform:'uppercase', marginBottom:16 }}>결제 내역</div>
          {[['아이디어','중소기업 온보딩 자동화 시스템'],['레벨','🌳 나무 (완성본)'],['결제 금액','₩150,000'],['결제 수단','카카오페이'],['결제 일시','2025.03.21 14:32'],['주문 번호','ABZ-2025-003842']].map(([l,v]) => (
            <div key={l} style={{ display:'flex', justifyContent:'space-between', fontSize:13, marginBottom:10 }}>
              <span style={{ color:'#888780' }}>{l}</span>
              <span style={{ fontWeight:500, color: l==='결제 금액' ? '#1D9E75' : '#1c1c1a' }}>{v}</span>
            </div>
          ))}
        </div>

        <div style={{ background:'#E1F5EE', borderRadius:12, padding:'16px 18px', marginBottom:24, textAlign:'left', border:'0.5px solid rgba(29,158,117,0.2)' }}>
          <div style={{ fontSize:13, fontWeight:500, color:'#085041', marginBottom:5 }}>🔄 파생 아이디어 수익공유 안내</div>
          <div style={{ fontSize:12, color:'#085041', lineHeight:1.6, opacity:0.85 }}>이 아이디어에서 영감을 받아 새로운 아이디어를 등록하시면 판매 수익의 15%가 원작자에게 자동 공유됩니다.</div>
        </div>

        <div style={{ display:'flex', gap:10 }}>
          <Link to="/idea/3" style={{ flex:1, padding:13, borderRadius:100, border:'none', background:'#1D9E75', color:'#fff', fontSize:14, fontWeight:500, textDecoration:'none', display:'flex', alignItems:'center', justifyContent:'center' }}>구매한 아이디어 보기</Link>
          <Link to="/my" style={{ flex:1, padding:13, borderRadius:100, border:'0.5px solid rgba(0,0,0,0.08)', background:'#fff', color:'#1c1c1a', fontSize:14, textDecoration:'none', display:'flex', alignItems:'center', justifyContent:'center' }}>마이페이지로 이동</Link>
        </div>
      </div>
    </div>
  )
}
