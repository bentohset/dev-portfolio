import React from 'react'
import { Switch } from '@headlessui/react'

function Toggle({ enabled, setEnabled }) {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-[#77bdfb]' : 'bg-[#77bdfb]'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Concise mode?</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-[#ecf2f8] transition`}
      />
    </Switch>
  )
}

export default Toggle