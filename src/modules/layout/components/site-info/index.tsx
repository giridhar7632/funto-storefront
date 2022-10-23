import { Disclosure } from "@headlessui/react"
import clsx from "clsx"
import React from "react"

const InfoContainer: React.FC<{ label: string }> = ({ label, children }) => {
  return (
    <div>
      <div className="hidden lg:flex lg:flex-col lg:gap-y-2">
        <span className="text-small-semi">{label}</span>
        {children}
      </div>
      <div className="mb-3 lg:hidden">
        <Collapsible label={label}>{children}</Collapsible>
      </div>
    </div>
  )
}

const Collapsible: React.FC<{ label: string }> = ({ label, children }) => {
  return (
    <div className="pb-4">
      <Disclosure>
        {({ open }) => {
          return (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between text-text">
                <span className="text-small-semi uppercase">{label}</span>
                <AnimatedButton open={open} />
              </Disclosure.Button>
              <Disclosure.Panel
                static
                className={clsx(
                  "overflow-hidden transition-[max-height,opacity] duration-700 ease-in-out",
                  {
                    "max-h-[300px] opacity-100": open,
                    "max-h-0 opacity-0": !open,
                  }
                )}
              >
                <div className="py-4">
                  <span>{children}</span>
                </div>
              </Disclosure.Panel>
            </>
          )
        }}
      </Disclosure>
    </div>
  )
}

const AnimatedButton = ({ open }: { open: boolean }) => {
  return (
    <div className="relative h-[15px] w-[15px] cursor-pointer">
      <div className="absolute inset-x-0 top-[7px] h-px bg-text" />
      <div
        className={clsx(
          "absolute inset-y-0 left-[7px] w-px bg-text transition-all duration-300 ease-out",
          { "rotate-90": open }
        )}
      />
    </div>
  )
}
