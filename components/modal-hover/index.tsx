'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import gsap from 'gsap';

export default function ModalHover({ modal, blogs }: any) {
  const { active, index } = modal;

  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorLabel = useRef<HTMLDivElement>(null);

  // Animate scale and visibility on modal open/close using GSAP timeline
  useEffect(() => {
    const elements = [modalContainer.current, cursor.current, cursorLabel.current];

    if (elements.some(el => el === null)) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.4 } });

    if (active) {
      // On open: set scale=0 instantly then animate to scale=1
      tl.set(elements, {
        scale: 0,
        xPercent: -50,
        yPercent: -50,
        autoAlpha: 1,  // ensure visible
      }).to(elements, {
        scale: 1,
      });
    } else {
      // On close: animate scale to 0 then hide
      tl.to(elements, {
        scale: 0,
        autoAlpha: 0,
        ease: "power3.in",
      });
    }
  }, [active]);

  // Animate modal container and cursors to follow mouse position
  useEffect(() => {
    if (!modalContainer.current || !cursor.current || !cursorLabel.current) return;

    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        ref={modalContainer}
        className={`${styles.modalContainer} rounded-3xl`}
      >
        <div
          style={{ top: `${index * -100}%` }}
          className={styles.modalSlider}
        >
          {blogs.map((blog: any, i: number) => {
            const { img, color } = blog;
            return (
              <div
                className={styles.modal}
                style={{ backgroundColor: color }}
                key={`modal_${i}`}
              >
                <Image
                  className="rounded-3xl"
                  src={img}
                  width={300}
                  height={0}
                  alt="image"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div
        ref={cursor}
        className={styles.cursor}
      ></div>

      <div
        ref={cursorLabel}
        className={styles.cursorLabel}
      >
        View
      </div>
    </>
  );
}
