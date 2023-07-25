"use client"
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { MoonStar } from '../../public'
import { Sun } from '../../public'

export default function LightSwitch() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? 'bg-secondaryLight' : 'bg-secondary'} relative inline-flex h-6 w-11 items-center rounded-full`}
    >
        <span className={`${enabled ? 'translate-x-[22px]' : 'translate-x-0.5'} flex h-5 w-5 transform rounded-full bg-primary transition `}>
          {enabled ? <Sun className='fill-secondaryLight w-full h-full no-outline'/> : <MoonStar className='fill-secondary m-auto'/>}
        </span>
    </Switch>
  )
}