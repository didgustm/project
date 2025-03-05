import styles from "./spinner.module.css";

type SpinnerProps = {
    className?: string;
    size?: 's' | 'm' | 'l';
    color?: 'black' | 'white' | 'theme'
}

function Spinner ({ size = 'm', color = 'theme' }: SpinnerProps) {
    return (
        <div className={`${styles.spinner} ${sizes.router(size)}`}>
            <svg width={50} height={50}>
                <path
                    d="M25,5 A20,20 0 1 1 5,25"
                    fill="none"
                    strokeWidth={5}
                    stroke={colors.router(color)}
                    strokeLinecap="round"
                    className={styles.shape}
                />
            </svg>
        </div>
    )
}

const sizes = {
    s: () => styles.small,
    m: () => styles.medium,
    l: () => styles.large,
    router(size: Exclude<SpinnerProps['size'], undefined>) {
        if (!this[size]) {
            throw new Error('invalid size: ' + size);
        }
        return this[size]();
    },
};

const colors = {
    black: () => '#272727',
    white: () => '#fff',
    theme: () => 'var(--color-main)',
    router(color: Exclude<SpinnerProps['color'], undefined>) {
        if (!this[color]) {
            throw new Error('invalid size: ' + color);
        }
        return this[color]();
    },
};

export default Spinner