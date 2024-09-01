"use client"
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'

function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [rotating, setRotating] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (mounted) {
            setRotating(true)
            const timeout = setTimeout(() => {
                setRotating(false)
            }, 300) 
            return () => clearTimeout(timeout)
        }
    }, [theme])

    if (!mounted) {
        return null;
    }

    const handleToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const rotationClass = rotating ? 'rotate-180' : 'rotate-0'
    const transitionClass = 'transition-transform duration-300 ease-in-out'

    return (
        <label className="relative inline-flex items-center cursor-pointer w-4 ">
            <input type="checkbox" className="sr-only" onChange={handleToggle} checked={theme === 'dark'} />
            <div className={`flex items-center justify-center ${transitionClass}`}>
                {theme === 'light' ? (
                    <SunIcon className={`h-5 w-5 text-yellow-500 ${rotationClass}`} />
                ) : (
                    <MoonIcon className={`h-5 w-5 text-blue-500 ${rotationClass}`} />
                )}
            </div>
        </label>
    )
}

export default ThemeToggle
