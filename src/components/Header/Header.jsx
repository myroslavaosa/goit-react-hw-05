import { clsx } from 'clsx'
import s from './Header.module.css'

function Header () {
    return (
        <section >
            <div clsx={s.header}>
                <h1>MovieScout</h1>

            </div>
            </section>
    
    )
}