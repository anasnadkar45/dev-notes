import Link from 'next/link'
import React from 'react'
import { Themetoggle } from './Themetoggle'
import { Button } from '@/components/ui/button'

const Navbar = () => {
    return (
        <nav className="border-b bg-background h-[10vh] flex items-center">
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <h1 className="font-bold text-3xl">
                        Dev<span className="text-primary">Notes</span>
                    </h1>
                </Link>

                <div className="flex items-center gap-x-5">
                    <Themetoggle />

                    <div className='flex items-center gap-x-5'>
                        <Button>Sign In</Button>
                        <Button variant={'secondary'}>Sign Up</Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar