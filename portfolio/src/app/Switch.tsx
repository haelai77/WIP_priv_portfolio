"use client"
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { Moon } from '../../public'
import { Sun } from '../../public'

export default function LightSwitch() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? 'bg-secondaryLight' : 'bg-secondary'} relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span className={`${enabled ? 'translate-x-[22px]' : 'translate-x-0.5'} inline-block h-5 w-5 transform rounded-full bg-primary transition justify-center self-center`}>
        {enabled ? <Sun className='fill-secondaryLight m-[-0.063rem] ml-[-0.125rem] w-8 h-8'/> : <Moon className='fill-secondary m-[-0.375rem] w-8 h-8'/>}
      </span>
    </Switch>
  )
}