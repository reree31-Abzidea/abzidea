import React from 'react'
import { Link } from 'react-router-dom'

const ideas = [
  { id:1, cat:'💼 비즈니스', level:'씨앗', title:'동네 카페 공동 구독 멤버십 모델', desc:'여러 카페를 하나의 구독권으로 이용하는 로컬 카페 연합 멤버십', price:'무료', free:true },
  { id:2, cat:'🎬 콘텐츠', level:'새싹', title:'직장인 15분 마이크로 러닝 커리큘럼', desc:'출퇴근 시간을 활용한 체계적 학습 프레임워크 설계안', price:'₩49,000', free:false },
  { id:3, cat:'⚙️ 문제해결', level:'나무', title:'중소기업 온보딩 자동화 시스템', desc:'신입사원 온보딩 프로세스를 90% 자동화하는 완성 기획서', price:'₩150,000', free:false },
]

const cats = [
  { icon:'💼', name:'비즈니스·사업', desc:'수익모델, 서비스 기획, 사이드 프로젝트' },
  { icon:'🎬', name:'콘텐츠', desc:'글, 영상, 강의, 크리에이터 아이디어' },
  { icon:'⚙️', name:'문제해결·업무', desc:'생산성, 조직변화, 업무 방식 개선' },
  { icon:'🤝', name:'사회·공공', desc:'사회문제, 교육격차, 환경개선' },
  { icon:'📷', name:'일상·취미', desc:'취미수익화, 생활개선, 개인프로젝트' },
]

const levelBadge = (lv) => {
  if(lv==='씨앗') return { bg:'#E1F5EE', color:'#085041' }
  if(lv==='새싹') return { bg:'#FAEEDA', color:'#BA7517' }
  return { bg:'#f5ede0', color:'#7a5c2e' }
}

export default function Home() {
  return (
    <div style={{ background:'#f7f6f2' }}>
      <div style={{ background:'#1c1c1a', padding:'80px 40px', textAlign:'center' }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:6, background:'rgba(29,158,117,0.15)', color:'#1D9E75', padding:'6px 16px', borderRadius:100, fontSize:12, fontWeight:500, marginBottom:28 }}>
          <span style={{ width:6, height:6, borderRadius:'50%', background:'#1D9E75', display:'inline-block' }}></span>
          아이디어 거래 플랫폼
        </div>
        <h1 style={{ fontFamily:'Noto Serif KR, serif', fontSize:52, fontWeight:400, color:'#fff', lineHeight:1.25, letterSpacing:-1, marginBottom:16 }}>
          당신의 아이디어가<br /><span style={{ color:'#1D9E75' }}>당신의 미래</span>입니다
        </h1>
        <p style={{ fontSize:16, color:'rgba(255,255,255,0.4)', marginBottom:40, fontWeight:300, lineHeight:1.7 }}>
          아이디어를 자유롭게 나누고, 거래하고, 수익을 만드세요.
        </p>
        <div style={{ display:'flex', gap:12, justifyContent:'center' }}>
          <Link to="/register" style={{ background:'#1D9E75', color:'#fff', padding:'14px 32px', borderRadius:100, fontSize:15, fontWeight:500, textDecoration:'none' }}>아이디어 등록하기</Link>
          <Link to="/explore" style={{ background:'transparent', color:'#fff', padding:'14px 32px', borderRadius:100, fontSize:15, border:'0.5px solid rgba(255,255,255,0.2)', textDecoration:'none' }}>아이디어 둘러보기</Link>
        </div>
      </div>

      <div style={{ display:'flex', justifyContent:'center', borderBottom:'0.5px solid rgba(0,0,0,0.08)', background:'#fff' }}>
        {[['1,621만명','비경제활동인구'],['#1','도전을 막는 이유 경제적 어려움'],['264조','글로벌 IP 시장 규모']].map(([num,label],i) => (
          <div key={i} style={{ flex:1, maxWidth:280, padding:'28px 20px', textAlign:'center', borderRight: i<2 ? '0.5px solid rgba(0,0,0,0.08)' : 'none' }}>
            <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:32, color:'#1c1c1a', marginBottom:6 }}>{num}</div>
            <div style={{ fontSize:12, color:'#888780', lineHeight:1.5 }}>{label}</div>
          </div>
        ))}
      </div>

      <div style={{ padding:'64px 40px', maxWidth:1080, margin:'0 auto' }}>
        <div style={{ fontSize:11, fontWeight:600, color:'#1D9E75', letterSpacing:2, textTransform:'uppercase', marginBottom:10 }}>Categories</div>
        <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:28, marginBottom:40 }}>어떤 아이디어를 찾고 계신가요?</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:14 }}>
          {cats.map((c,i) => (
            <Link to="/explore" key={i} style={{ background:'#fff', borderRadius:14, padding:'20px 16px', textDecoration:'none', border:'0.5px solid rgba(0,0,0,0.08)', display:'block' }}>
              <div style={{ fontSize:28, marginBottom:12 }}>{c.icon}</div>
              <div style={{ fontSize:13, fontWeight:500, color:'#1c1c1a', marginBottom:5 }}>{c.name}</div>
              <div style={{ fontSize:11, color:'#888780', lineHeight:1.5 }}>{c.desc}</div>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ background:'#f7f6f2', padding:'64px 40px' }}>
        <div style={{ maxWidth:1080, margin:'0 auto' }}>
          <div style={{ fontSize:11, fontWeight:600, color:'#1D9E75', letterSpacing:2, textTransform:'uppercase', marginBottom:10 }}>Idea Levels</div>
          <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:28, marginBottom:40 }}>아이디어의 성장 단계</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}>
            {[
              { icon:'🌱', badge:'씨앗 Level 1', title:'첫 번째 생각', desc:'초기 단계의 아이디어. 문제 인식과 불편함에서 출발한 가능성의 씨앗.', items:['초기 생각과 문제의식','불편함과 개선 방향 제시','누구나 무료로 열람'], price:'무료 공개', badgeBg:'#E1F5EE', badgeColor:'#085041' },
              { icon:'🌿', badge:'새싹 Level 2', title:'구체화된 방향', desc:'해결 방안이 담긴 아이디어. 흐름과 구조가 잡혀있는 실행 가능한 개념.', items:['해결방안 일부 제시','흐름 방식 구조 설명','결제 후 전문 공개'], price:'유료 구매', badgeBg:'#FAEEDA', badgeColor:'#BA7517' },
              { icon:'🌳', badge:'나무 Level 3', title:'실행 가능한 완성본', desc:'결과물 중심의 완성된 아이디어. 바로 활용하거나 사업화 가능한 수준.', items:['결과물 중심 완성 아이디어','즉시 활용 사업화 가능','결제 후 전문 공개'], price:'유료 구매', badgeBg:'#f5ede0', badgeColor:'#7a5c2e' },
            ].map((lv,i) => (
              <div key={i} style={{ background:'#fff', borderRadius:16, padding:28, border:'0.5px solid rgba(0,0,0,0.08)' }}>
                <div style={{ display:'inline-flex', alignItems:'center', gap:6, background:lv.badgeBg, color:lv.badgeColor, padding:'5px 12px', borderRadius:100, fontSize:12, fontWeight:500, marginBottom:16 }}>{lv.icon} {lv.badge}</div>
                <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:18, marginBottom:8 }}>{lv.title}</div>
                <div style={{ fontSize:13, color:'#888780', lineHeight:1.6, marginBottom:16, fontWeight:300 }}>{lv.desc}</div>
                {lv.items.map((item,j) => (
                  <div key={j} style={{ display:'flex', alignItems:'center', gap:8, fontSize:13, color:'#888780', marginBottom:6 }}>
                    <span style={{ color:lv.badgeColor }}>✓</span>{item}
                  </div>
                ))}
                <div style={{ marginTop:16, paddingTop:16, borderTop:'0.5px solid rgba(0,0,0,0.08)', fontSize:14, fontWeight:500, color: i===0 ? '#1D9E75' : '#1c1c1a' }}>{lv.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding:'64px 40px', maxWidth:1080, margin:'0 auto' }}>
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:36 }}>
          <div>
            <div style={{ fontSize:11, fontWeight:600, color:'#1D9E75', letterSpacing:2, textTransform:'uppercase', marginBottom:10 }}>Featured</div>
            <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:28 }}>지금 주목받는 아이디어</div>
          </div>
          <Link to="/explore" style={{ fontSize:13, color:'#888780', textDecoration:'none' }}>전체보기</Link>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:18 }}>
          {ideas.map(idea => {
            const badge = levelBadge(idea.level)
            return (
              <Link to={`/idea/${idea.id}`} key={idea.id} style={{ background:'#fff', border:'0.5px solid rgba(0,0,0,0.08)', borderRadius:14, padding:22, textDecoration:'none', display:'block' }}>
                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:12 }}>
                  <span style={{ fontSize:11, color:'#888780', background:'#f7f6f2', padding:'4px 10px', borderRadius:100 }}>{idea.cat}</span>
                  <span style={{ fontSize:11, fontWeight:500, background:badge.bg, color:badge.color, padding:'4px 10px', borderRadius:100 }}>{idea.level==='씨앗'?'🌱':idea.level==='새싹'?'🌿':'🌳'} {idea.level}</span>
                </div>
                <div style={{ fontSize:15, fontWeight:500, marginBottom:8, lineHeight:1.5, color:'#1c1c1a' }}>{idea.title}</div>
                <div style={{ fontSize:13, color:'#888780', lineHeight:1.6, marginBottom:16, fontWeight:300 }}>{idea.desc}</div>
                <div style={{ paddingTop:14, borderTop:'0.5px solid rgba(0,0,0,0.08)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <span style={{ fontSize:14, fontWeight:500, color: idea.free ? '#1D9E75' : '#1c1c1a' }}>{idea.price}</span>
                  <span style={{ fontSize:12, color:'#888780' }}>by 김○○</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      <div style={{ background:'#1c1c1a', padding:'80px 40px', textAlign:'center' }}>
        <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:36, color:'#fff', marginBottom:16, lineHeight:1.4 }}>
          지금 <span style={{ color:'#1D9E75' }}>진짜 삶</span>을 시작하세요
        </div>
        <div style={{ fontSize:15, color:'rgba(255,255,255,0.4)', marginBottom:36, fontWeight:300 }}>당신의 아이디어가 누군가의 내일을 바꿉니다</div>
        <Link to="/register" style={{ background:'#1D9E75', color:'#fff', padding:'14px 36px', borderRadius:100, fontSize:15, fontWeight:500, textDecoration:'none' }}>무료로 아이디어 올리기</Link>
      </div>

      <footer style={{ padding:'28px 40px', borderTop:'0.5px solid rgba(0,0,0,0.08)', display:'flex', justifyContent:'space-between', alignItems:'center', background:'#fff' }}>
        <div style={{ fontFamily:'Noto Serif KR, serif', fontSize:16 }}>Ab<span style={{ color:'#1D9E75' }}>zidea</span></div>
        <div style={{ fontSize:12, color:'#888780' }}>2025 Abzidea. 당신의 진짜 삶을 응원합니다.</div>
      </footer>
    </div>
  )
}
