import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FONT_SIZES } from "@/config/typography";
import SelectTariffButton from "@/components/shared/SelectTariffButton";
import imageRight from "@/assets/visit to the apiary/image right block 1.webp";
import topImage from "@/assets/visit to the apiary/top image 1.webp";
import leftImage from "@/assets/visit to the apiary/left image 1.svg";
import heroBg from "@/assets/1-background.webp";

type ApiaryVisitHeroContent = {
  title: string;
  meta: string;
  descriptionLine1: string;
  descriptionLine2: string;
  buttonText: string;
  images: {
    background: string;
    top: string;
    right: string;
    left: string;
  };
};

const STORAGE_KEY = "apiary-visit-hero-content";
const AUTH_KEY = "apiary-visit-hero-editor-auth";

const DEFAULT_CONTENT: ApiaryVisitHeroContent = {
  title: "визит на пасеку",
  meta: "25.01.2026 в 10:00 | г. Москва, ул. Ленина 1",
  descriptionLine1: "Две строчки дополнительного",
  descriptionLine2: "описания подкрепляющего заголовок",
  buttonText: "Оставить заявку",
  images: {
    background: heroBg,
    top: topImage,
    right: imageRight,
    left: leftImage,
  },
};

const ApiaryVisitHero: React.FC = () => {
  const [content, setContent] = useState<ApiaryVisitHeroContent>(DEFAULT_CONTENT);
  const [isEditorAuthorized, setIsEditorAuthorized] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  useEffect(() => {
    const savedContent = window.localStorage.getItem(STORAGE_KEY);
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent) as ApiaryVisitHeroContent;
        setContent(parsed);
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }

    const authState = window.sessionStorage.getItem(AUTH_KEY);
    setIsEditorAuthorized(authState === "1");
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  }, [content]);

  const updateContent = <K extends keyof ApiaryVisitHeroContent>(
    key: K,
    value: ApiaryVisitHeroContent[K],
  ) => {
    setContent((prev) => ({ ...prev, [key]: value }));
  };

  const updateImage = (key: keyof ApiaryVisitHeroContent["images"], value: string) => {
    setContent((prev) => ({
      ...prev,
      images: {
        ...prev.images,
        [key]: value,
      },
    }));
  };

  const handleEditorLogin = () => {
    const entered = window.prompt("Введите пароль редактора");
    if (!entered) return;

    const expected = import.meta.env.VITE_APIARY_HERO_EDITOR_PASSWORD ?? "kuriyama-admin";
    if (entered === expected) {
      setIsEditorAuthorized(true);
      setIsEditorOpen(true);
      window.sessionStorage.setItem(AUTH_KEY, "1");
      return;
    }

    window.alert("Неверный пароль");
  };

  const handleEditorLogout = () => {
    setIsEditorAuthorized(false);
    setIsEditorOpen(false);
    window.sessionStorage.removeItem(AUTH_KEY);
  };

  const resetContent = () => {
    setContent(DEFAULT_CONTENT);
    window.localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
      <div
        className="absolute"
        style={{
          left: "0%",
          top: "0%",
          width: "100%",
          height: "100%",
        }}
      >
        <img src={content.images.background} alt="" className="w-full h-full object-fill" />
      </div>

      <motion.img
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        src={content.images.top}
        alt=""
        className="absolute object-contain mix-blend-multiply"
        style={{
          left: "74.86%",
          top: "9.42%",
          width: "11.88%",
          height: "42.85%",
          zIndex: 1,
        }}
      />

      <motion.img
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        src={content.images.right}
        alt=""
        className="absolute object-contain"
        style={{
          left: "36.60%",
          top: "32.69%",
          width: "54.93%",
          height: "52.01%",
          zIndex: 2,
        }}
      />

      <motion.img
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        src={content.images.left}
        alt=""
        className="absolute object-contain"
        style={{
          left: "26.81%",
          top: "35.19%",
          width: "12.64%",
          height: "46.11%",
          zIndex: 3,
        }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute font-ua-brand font-bold uppercase leading-none text-[#2E261D]"
        style={{
          left: "8.83%",
          top: "20.15%",
          width: "60.66%",
          fontSize: "5vw",
          zIndex: 10,
        }}
      >
        {content.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: "8.35%",
          top: "32.86%",
          width: "21.34%",
          fontSize: FONT_SIZES.body,
          zIndex: 10,
        }}
      >
        {content.meta}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute font-glametrix text-[#2E261D]"
        style={{
          left: "8.22%",
          top: "38.86%",
          width: "18.92%",
          fontSize: FONT_SIZES.body,
          zIndex: 10,
        }}
      >
        {content.descriptionLine1}
        <br />
        {content.descriptionLine2}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute flex items-center justify-center cursor-pointer group"
        style={{
          left: "8.12%",
          top: "47.36%",
          width: "15.21%",
          zIndex: 10,
        }}
      >
        <SelectTariffButton width="100%" text={content.buttonText} />
      </motion.div>

      {!isEditorAuthorized ? (
        <button
          type="button"
          onClick={handleEditorLogin}
          className="absolute right-4 top-4 z-50 rounded bg-black/70 px-3 py-2 text-sm text-white hover:bg-black"
        >
          Вход редактора
        </button>
      ) : (
        <div className="absolute right-4 top-4 z-50 flex gap-2">
          <button
            type="button"
            onClick={() => setIsEditorOpen((prev) => !prev)}
            className="rounded bg-black/70 px-3 py-2 text-sm text-white hover:bg-black"
          >
            {isEditorOpen ? "Скрыть редактор" : "Редактировать"}
          </button>
          <button
            type="button"
            onClick={handleEditorLogout}
            className="rounded bg-[#C65A32] px-3 py-2 text-sm text-white hover:opacity-90"
          >
            Выход
          </button>
        </div>
      )}

      {isEditorAuthorized && isEditorOpen ? (
        <aside className="absolute right-4 top-16 z-50 w-[360px] max-h-[80vh] overflow-auto rounded border border-[#C65A32] bg-[#EFE3D6] p-4 text-[#2E261D] shadow-lg">
          <h2 className="mb-3 font-glametrix text-lg">Редактор 1 слайда</h2>

          <label className="mb-2 block text-sm">Заголовок</label>
          <input
            className="mb-3 w-full rounded border border-[#2E261D]/30 px-2 py-1"
            value={content.title}
            onChange={(event) => updateContent("title", event.target.value)}
          />

          <label className="mb-2 block text-sm">Дата и локация</label>
          <input
            className="mb-3 w-full rounded border border-[#2E261D]/30 px-2 py-1"
            value={content.meta}
            onChange={(event) => updateContent("meta", event.target.value)}
          />

          <label className="mb-2 block text-sm">Описание строка 1</label>
          <input
            className="mb-3 w-full rounded border border-[#2E261D]/30 px-2 py-1"
            value={content.descriptionLine1}
            onChange={(event) => updateContent("descriptionLine1", event.target.value)}
          />

          <label className="mb-2 block text-sm">Описание строка 2</label>
          <input
            className="mb-3 w-full rounded border border-[#2E261D]/30 px-2 py-1"
            value={content.descriptionLine2}
            onChange={(event) => updateContent("descriptionLine2", event.target.value)}
          />

          <label className="mb-2 block text-sm">Текст кнопки</label>
          <input
            className="mb-3 w-full rounded border border-[#2E261D]/30 px-2 py-1"
            value={content.buttonText}
            onChange={(event) => updateContent("buttonText", event.target.value)}
          />

          <label className="mb-2 block text-sm">URL фоновой картинки</label>
          <input
            className="mb-3 w-full rounded border border-[#2E261D]/30 px-2 py-1"
            value={content.images.background}
            onChange={(event) => updateImage("background", event.target.value)}
          />

          <label className="mb-2 block text-sm">URL верхней картинки</label>
          <input
            className="mb-3 w-full rounded border border-[#2E261D]/30 px-2 py-1"
            value={content.images.top}
            onChange={(event) => updateImage("top", event.target.value)}
          />

          <label className="mb-2 block text-sm">URL правой картинки</label>
          <input
            className="mb-3 w-full rounded border border-[#2E261D]/30 px-2 py-1"
            value={content.images.right}
            onChange={(event) => updateImage("right", event.target.value)}
          />

          <label className="mb-2 block text-sm">URL левой картинки</label>
          <input
            className="mb-4 w-full rounded border border-[#2E261D]/30 px-2 py-1"
            value={content.images.left}
            onChange={(event) => updateImage("left", event.target.value)}
          />

          <button
            type="button"
            onClick={resetContent}
            className="w-full rounded bg-[#2E261D] px-3 py-2 text-sm text-white hover:opacity-90"
          >
            Сбросить к значениям по умолчанию
          </button>
        </aside>
      ) : null}
    </section>
  );
};

export default ApiaryVisitHero;
