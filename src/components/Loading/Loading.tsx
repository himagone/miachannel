import { useRef, useEffect } from 'react';
import styles from './Loading.module.css';

interface LoadingProps {
  isLoaded: boolean;
  onExitComplete: () => void;
}

export default function Loading({ isLoaded, onExitComplete }: LoadingProps) {
  const state = isLoaded ? 'exit' : 'active';
  const overlayRef = useRef<HTMLDivElement>(null);

  // アニメーション未定義時のフォールバック:
  // exit 状態になった時点でCSSアニメーションが設定されていなければ即座に完了扱い
  useEffect(() => {
    if (state !== 'exit') return;
    const el = overlayRef.current;
    if (!el) return;
    const style = getComputedStyle(el);
    const hasAnimation = style.animationName !== 'none' && style.animationName !== '';
    if (!hasAnimation) {
      onExitComplete();
    }
  }, [state, onExitComplete]);

  const handleAnimationEnd = () => {
    if (state === 'exit') {
      onExitComplete();
    }
  };

  return (
    <div
      ref={overlayRef}
      className={styles.overlay}
      data-state={state}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className={styles.content}>
        <svg
          className={styles.pawLogo}
          viewBox="0 0 100 100"
          width="80"
          height="80"
          aria-hidden="true"
        >
          {/* メインパッド */}
          <ellipse
            className={styles.pawPad0}
            cx="50"
            cy="65"
            rx="22"
            ry="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          {/* 左上の指パッド */}
          <ellipse
            className={styles.pawPad1}
            cx="22"
            cy="38"
            rx="10"
            ry="13"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          {/* 中央上の指パッド */}
          <ellipse
            className={styles.pawPad2}
            cx="40"
            cy="26"
            rx="9"
            ry="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          {/* 中央右の指パッド */}
          <ellipse
            className={styles.pawPad3}
            cx="60"
            cy="26"
            rx="9"
            ry="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          {/* 右上の指パッド */}
          <ellipse
            className={styles.pawPad4}
            cx="78"
            cy="38"
            rx="10"
            ry="13"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        <span className={styles.nameText}>MIA</span>
      </div>
      <div className={styles.colorOverlay} />
    </div>
  );
}
