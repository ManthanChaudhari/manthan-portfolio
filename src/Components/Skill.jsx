import React from 'react'
import Button from './Reusable/Button'

function SkillButton({text , className = ""}){
    return <Button text={text} className={`ring-2 cursor-default rounded-sm text-black ${className}`}/>;
}

function Skill() {
  return (
    <div className='flex flex-wrap gap-x-2 gap-y-2 justify-center'>
     <SkillButton text='HTML5'/>
     <SkillButton text='CSS3' />
     <SkillButton text='Tailwind Css' />
     <SkillButton text='Javascript' />
     <SkillButton text='React' />
     <SkillButton text='Redux' />
     <SkillButton text='Git' />
     <SkillButton text='Github' />
    </div>
  )
}

export default Skill
