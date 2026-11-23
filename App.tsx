import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart, Sparkles, Flower2, ArrowDown } from 'lucide-react';
import { wedding } from './wedding';

const petals = Array.from({length:18}, (_,i)=>({left:`${(i*37)%100}%`,delay:(i%7)*.32,duration:6+(i%5)}));

export default function App(){
  const [opened,setOpened]=useState(false);
  return <main className="scene">
    <div className="scene-photo"/>
    <div className="scene-shade"/>
    <div className="ambient-glow glow-a"/><div className="ambient-glow glow-b"/>
    <div className="floating-petals" aria-hidden="true">{petals.map((p,i)=><span key={i} style={{left:p.left,animationDelay:`${p.delay}s`,animationDuration:`${p.duration}s`}}>✿</span>)}</div>
    <AnimatePresence mode="wait">
      {!opened ? <motion.section className="intro-stage" key="closed" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0,scale:1.04,filter:'blur(8px)'}} transition={{duration:.65}}>
        <div className="envelope-wrap">
          <div className="envelope-back"/>
          <motion.div className="envelope-letter" initial={{y:30}} animate={{y:0}} transition={{duration:1.1,delay:.45,ease:[.2,.8,.2,1]}}>
            <div className="letter-mini-border">
              <div className="mini-ganesh">॥ श्री गणेशाय नमः ॥</div>
              <div className="mini-flower">✿</div>
              <div className="mini-names">{wedding.bride}<span>&</span>{wedding.groom}</div>
              <div className="mini-date">{wedding.date}</div>
            </div>
          </motion.div>
          <motion.div className="envelope-flap" initial={{rotateX:0}} animate={{rotateX:0}}/>
          <div className="envelope-front"/>
          <div className="seal"><span>अ</span><Heart size={15} fill="currentColor"/></div>
          <motion.div className="cover-copy" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:.8,duration:.8}}>
            <p className="cover-kicker">A ROYAL CELEBRATION</p>
            <h1>You're Invited</h1>
            <p className="cover-couple">{wedding.bride} <i>&</i> {wedding.groom}</p>
            <button className="open-btn" onClick={()=>setOpened(true)}>Open your invitation <span>✧</span></button>
            <p className="tap-hint">TAP TO UNFOLD OUR STORY</p>
          </motion.div>
        </div>
        <p className="stage-caption">A day of love, blessings & forever</p>
      </motion.section> : <motion.section className="opened-stage" key="opened" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.7}}>
        <motion.div className="unfold-card" initial={{y:120,scale:.82,rotateX:18,opacity:0}} animate={{y:0,scale:1,rotateX:0,opacity:1}} transition={{duration:1.25,ease:[.16,1,.3,1]}}>
          <motion.div className="card-wing left-wing" initial={{rotateY:0}} animate={{rotateY:-105}} transition={{duration:1.05,delay:.05,ease:[.2,.7,.2,1]}}/>
          <motion.div className="card-wing right-wing" initial={{rotateY:0}} animate={{rotateY:105}} transition={{duration:1.05,delay:.05,ease:[.2,.7,.2,1]}}/>
          <div className="invitation-paper">
            <div className="paper-frame">
              <div className="paper-ornament top-ornament">✦ ❧ ✦</div>
              <p className="ganesh">॥ श्री गणेशाय नमः ॥</p>
              <div className="rule"><span>✿</span></div>
              <p className="eyebrow">WITH THE BLESSINGS OF OUR FAMILIES</p>
              <h2 className="couple-names">{wedding.bride}<span>&</span>{wedding.groom}</h2>
              <p className="invitation-message">{wedding.message}</p>
              <div className="date-block"><Sparkles size={18}/><p>{wedding.date}</p><span>{wedding.time}</span></div>
              <div className="schedule">
                <p className="section-label">WEDDING CELEBRATIONS</p>
                {wedding.events.map((event)=><div className="event-row" key={event.date}><div><b>{event.date}</b><small>{event.day}</small></div><span>{event.title}</span></div>)}
              </div>
              <div className="venue-block"><p className="section-label">THE WEDDING VENUE</p><h3>{wedding.venue}</h3><p>{wedding.address}</p></div>
              <div className="paper-ornament bottom-ornament">❧ ♥ ❧</div>
              <p className="closing">Your presence will be our greatest blessing.</p>
            </div>
          </div>
        </motion.div>
        <motion.button className="replay-btn" onClick={()=>setOpened(false)} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.3}}>↶ Replay opening</motion.button>
      </motion.section>}
    </AnimatePresence>
    <div className="bottom-note">MADE WITH LOVE · ANITA & SAURABH</div>
  </main>;
}