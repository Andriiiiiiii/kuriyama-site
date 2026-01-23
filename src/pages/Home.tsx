import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="min-h-screen w-full bg-background flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-8 text-foreground">
          Курияма
        </h1>
        <p className="text-xl text-center mb-12 text-muted-foreground">
          Добро пожаловать на наш сайт
        </p>

        <nav className="space-y-4">
          <Link
            to="/visit"
            className="block w-full p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold mb-2 text-foreground">
              ПОСЕЩЕНИЕ
            </h2>
            <p className="text-muted-foreground">
              Информация о посещении, тарифы и сезонные занятия
            </p>
          </Link>

          <Link
            to="/beekeeping"
            className="block w-full p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold mb-2 text-foreground">
              ПЧЕЛОВОДСТВО
            </h2>
            <p className="text-muted-foreground">
              Информация о пчеловодстве и продукции пасеки
            </p>
          </Link>

          <Link
            to="/production"
            className="block w-full p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold mb-2 text-foreground">
              ПРОДУКЦИЯ
            </h2>
            <p className="text-muted-foreground">
              Каталог нашей продукции
            </p>
          </Link>

          <Link
            to="/personal-beekeeping"
            className="block w-full p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold mb-2 text-foreground">
              ЛИЧНОЕ ПЧЕЛОВОДСТВО
            </h2>
            <p className="text-muted-foreground">
              Станьте частью нашей пчелиной семьи, заботьтесь о своих ульях
            </p>
          </Link>
        </nav>
      </div>
    </main>
  );
};

export default Home;
