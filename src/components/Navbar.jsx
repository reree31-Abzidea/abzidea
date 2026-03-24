import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const styles = {
  nav: { display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 40px', borderBottom:'0.5px solid rgba(0,0,0,0.08)', background:'#fff', position:'sticky', top:0, zIndex:100 },
  logo: { fontFamily:'Noto Serif KR, serif', fontSize:20, fontWeight:500, color:'#1c1c1a', textDecoration:'none' },
  logoSpan: { color:'#1D9E75' },
  links: { display:'flex', alignItems:'center', gap:24 },
  link: { fontSize:14, color:'#888780', textDecoration:'none', cursor:'pointer' },
  linkActive: { fontSize:14, color:'#1c1c1a', fontWeight:500, textDecoration:'none' },
  btnLogin: { background:'transparent', border:'0.5px solid rgba(0,0,0,0.2)', color:'#1c1c1a', padding:'8px 18px', borderRadius:100, fontSize:13, cursor:'pointer' },
  btnStart: { background:'#1c1c1a', border:'none', color:'#fff', padding:'8px 18px', borderRadius:100, fontSize:13, cursor:'pointer' },
}

export default function Navbar() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        Ab<span style={styles.logoSpan}>zidea</span>
      </Link>
      <div style={styles.links}>
        <Link to="/explore" style={isActive('/explore') ? styles.linkActive : styles.link}>아이디어 탐색</Link>
        <Link to="/register" style={isActive('/register') ? styles.linkActive : styles.link}>아이디어 등록</Link>
        <Link to="/invest" style={isActive('/invest') ? styles.linkActive : styles.link}>선순환 투자</Link>
        <Link to="/auth" style={styles.btnLogin}>로그인</Link>
        <Link to="/register" style={styles.btnStart}>시작하기</Link>
      </div>
    </nav>
  )
}
