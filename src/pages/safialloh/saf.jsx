import React from "react";
import { useTranslation } from "react-i18next";

const Saf = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div>
      <footer className="w-[100%] pt-10">
        <div className="w-[80%] m-auto bg-[#6C5FBC] bg-[url('src/components/narased3/Group34844.svg')] text-white rounded-3xl p-10 flex justify-between items-center box-border">
          <div>
            <h2 className="text-6xl font-bold mb-4">
              {t("SafiUllohTranslationJSON.getSkidka")}
            </h2>
            <div className="flex bg-white rounded-l-lg rounded-r-lg items-center">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="rounded-l-lg px-4 py-4 w-60 text-gray-700 outline-none"
              />
              <button className="bg-[#6C5FBC] h-[10%] w-[30%] text-white rounded-r-lg rounded-l-lg px-4 py-2 font-bold">
                {t("SafiUllohTranslationJSON.subscribe")}
              </button>
            </div>
          </div>
          <img
            src="src/components/narased3/Food Image (3).svg"
            alt="Food"
            className="w-45 h-15 rounded-full"
          />
        </div>
        {/*  */}
        <main class="flex flex-col px-5">
          <header class="self-center text-5xl font-semibold leading-[54px] text-slate-500 max-md:text-4xl">
            <span class="text-zinc-700">{t("SafiUllohTranslationJSON.Latest")}</span>
            
            <span class="text-slate-500">{t("SafiUllohTranslationJSON.Article")}</span>
          </header>
          <section class="mt-28 w-full max-md:mt-10 max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col max-md:gap-0">


              <article class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow px-3.5 py-7 mx-auto w-full bg-white rounded-2xl shadow-2xl max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8812baa62f330eb6aa6e33313360b2393a4eeae7f556b8143372a244820e49e5?apiKey=3ed6cd68db10480d895cadf56d095c56&"
                    alt="Food ordering illustration"
                    class="w-full aspect-[1.16]"
                  />
                  <h2 class="mt-7 text-xl font-semibold leading-6 text-neutral-800">
                    {t("SafiUllohTranslationJSON.textC1")}

                  </h2>
                  <div class="flex gap-5 justify-between mt-7 w-full">
                    <div class="flex gap-3">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9927d74bf73d293f6de75dc40d179b3ac977c9c62608f355c7586d440b958d6e?apiKey=3ed6cd68db10480d895cadf56d095c56&"
                        alt="Author avatar"
                        class="shrink-0 aspect-[0.98] w-[43px]"
                      />
                      <div class="flex flex-col self-start mt-2">
                        <span class="text-xs text-neutral-400">{t("SafiUllohTranslationJSON.writenby")}</span>
                        <span class="mt-1.5 text-lg font-medium leading-7 text-black">
                          Perperzon
                        </span>
                      </div>
                    </div>
                    <time
                      datetime="2022-12-15"
                      class="self-end mt-6 text-base font-medium leading-8 text-zinc-400"
                    >
                      15 DEC, 2022
                    </time>
                  </div>
                </div>
              </article>
              <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow px-3.5 py-7 mx-auto w-full bg-white rounded-2xl shadow-2xl max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6857b8f63418551a051d646d962da073352486d442ff66e236b193ba012fb689?apiKey=3ed6cd68db10480d895cadf56d095c56&"
                    alt="Order tracking illustration"
                    class="w-full aspect-[1.16]"
                  />
                  <h2 class="mt-7 text-xl font-semibold leading-6 text-neutral-800">
                  {t("SafiUllohTranslationJSON.textC2")}
                  </h2>
                  <div class="flex gap-5 justify-between mt-7 w-full">
                    <div class="flex gap-3">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a9a67875d454d16eda1baaeffd3efeb064cff6a8b77a9b2494dd7655bae4c6d?apiKey=3ed6cd68db10480d895cadf56d095c56&"
                        alt="Author avatar"
                        class="shrink-0 w-11 aspect-square"
                      />
                      <div class="flex flex-col self-start mt-2">
                        <span class="text-xs text-neutral-400">{t("SafiUllohTranslationJSON.writenby")}</span>
                        <span class="mt-1.5 text-lg font-medium leading-7 text-black">
                          Perperzon
                        </span>
                      </div>
                    </div>
                    <time
                      datetime="2022-12-15"
                      class="self-end mt-6 text-base font-medium leading-8 text-zinc-400"
                    >
                      15 DEC, 2022
                    </time>
                  </div>
                </div>
              </article>
              <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow px-3.5 py-7 mx-auto w-full bg-white rounded-2xl shadow-2xl max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/497e9d7ae215e46a858304b9f0c80d2638a4f144ce971a11540d2e4025159f0b?apiKey=3ed6cd68db10480d895cadf56d095c56&"
                    alt="Card management illustration"
                    class="w-full aspect-[1.16]"
                  />
                  <h2 class="mt-7 text-xl font-semibold leading-6 text-neutral-800">
                  {t("SafiUllohTranslationJSON.textC1")}
                  </h2>
                  <div class="flex gap-5 justify-between mt-5 w-full">
                    <div class="flex gap-3">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f05883b8d9d456e211ae86b7e3fea4f64f8bb97cfeb6b0bb07167215580f4c40?apiKey=3ed6cd68db10480d895cadf56d095c56&"
                        alt="Author avatar"
                        class="shrink-0 aspect-[0.98] w-[43px]"
                      />
                      <div class="flex flex-col self-start mt-2">
                        <span class="text-xs text-neutral-400">{t("SafiUllohTranslationJSON.writenby")}</span>
                        <span class="mt-1.5 text-lg font-medium leading-7 text-black">
                          Perperzon
                        </span>
                      </div>
                    </div>
                    <time
                      datetime="2022-12-15"
                      class="self-end mt-6 text-base font-medium leading-8 text-zinc-400"
                    >
                      15 DEC, 2022
                    </time>
                  </div>
                </div>
              </article>
            </div>
          </section>
          <section class="mt-28 w-full max-md:mt-10 max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col max-md:gap-0">
              <article class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow px-3.5 py-7 mx-auto w-full bg-white rounded-2xl shadow-2xl max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4f203319c51b934ed0bb5dc722fc72bd93a99a3ad1b74f8e186f175773fe097?apiKey=3ed6cd68db10480d895cadf56d095c56&"
                    alt="Business tips and tricks illustration"
                    class="w-full aspect-[1.16]"
                  />
                  <h2 class="mt-6 text-xl font-semibold leading-6 text-neutral-800">
                  {t("SafiUllohTranslationJSON.textC1")}
                  </h2>
                  <div class="flex gap-5 justify-between mt-5 w-full">
                    <div class="flex gap-3">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9927d74bf73d293f6de75dc40d179b3ac977c9c62608f355c7586d440b958d6e?apiKey=3ed6cd68db10480d895cadf56d095c56&"
                        alt="Author avatar"
                        class="shrink-0 aspect-[0.98] w-[43px]"
                      />
                      <div class="flex flex-col self-start mt-2">
                        <span class="text-xs text-neutral-400">{t("SafiUllohTranslationJSON.writenby")}</span>
                        <span class="mt-1.5 text-lg font-medium leading-7 text-black">
                          Perperzon
                        </span>
                      </div>
                    </div>
                    <time
                      datetime="2022-12-15"
                      class="self-end mt-6 text-base font-medium leading-8 text-zinc-400"
                    >
                      15 DEC, 2022
                    </time>
                  </div>
                </div>
              </article>
              <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow px-3.5 py-7 mx-auto w-full bg-white rounded-2xl shadow-2xl max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e759f0afb12d2897ddbd9556b28da553a2bd9b352a05dc1357fff0089b8604e9?apiKey=3ed6cd68db10480d895cadf56d095c56&"
                    alt="Money control illustration"
                    class="w-full aspect-[1.16]"
                  />
                  <h2 class="mt-7 text-xl font-semibold leading-6 text-neutral-800">
                  {t("SafiUllohTranslationJSON.textC1")}
                  </h2>
                  <div class="flex gap-5 justify-between mt-5 w-full">
                    <div class="flex gap-3">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a9a67875d454d16eda1baaeffd3efeb064cff6a8b77a9b2494dd7655bae4c6d?apiKey=3ed6cd68db10480d895cadf56d095c56&"
                        alt="Author avatar"
                        class="shrink-0 w-11 aspect-square"
                      />
                      <div class="flex flex-col self-start mt-2">
                        <span class="text-xs text-neutral-400">{t("SafiUllohTranslationJSON.writenby")}</span>
                        <span class="mt-1.5 text-lg font-medium leading-7 text-black">
                          Perperzon
                        </span>
                      </div>
                    </div>
                    <time
                      datetime="2022-12-15"
                      class="self-end mt-6 text-base font-medium leading-8 text-zinc-400"
                    >
                      15 DEC, 2022
                    </time>
                  </div>
                </div>
              </article>
              <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow px-3.5 py-7 mx-auto w-full bg-white rounded-2xl shadow-2xl max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/82c43f1c9fb4a4fa230ec0153209e8a31a066471f0c513b6164c3ae88653ac25?apiKey=3ed6cd68db10480d895cadf56d095c56&"
                    alt="Top 5 business ideas illustration"
                    class="w-full aspect-[1.16]"
                  />
                  <h2 class="mt-6 text-xl font-semibold leading-6 text-neutral-800">
                  {t("SafiUllohTranslationJSON.textC1")}
                  </h2>
                  <div class="flex gap-5 justify-between mt-5 w-full">
                    <div class="flex gap-3">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f05883b8d9d456e211ae86b7e3fea4f64f8bb97cfeb6b0bb07167215580f4c40?apiKey=3ed6cd68db10480d895cadf56d095c56&"
                        alt="Author avatar"
                        class="shrink-0 aspect-[0.98] w-[43px]"
                      />
                      <div class="flex flex-col self-start mt-2">
                        <span class="text-xs text-neutral-400">{t("SafiUllohTranslationJSON.writenby")}</span>
                        <span class="mt-1.5 text-lg font-medium leading-7 text-black">
                          Perperzon
                        </span>
                      </div>
                    </div>
                    <time
                      datetime="2022-12-15"
                      class="self-end mt-6 text-base font-medium leading-8 text-zinc-400"
                    >
                      15 DEC, 2022
                    </time>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </main>

        {/*  */}
        <div className="bg-gray-100 text-gray-600 py-10 mt-[100px]">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-4">
                <img
                  src="src/components/narased3/Logo.svg"
                  alt="Eatly"
                  className="w-40 h-10"
                />
              </div>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="hover:text-purple-600">
                  Blog
                </a>
                <a href="#" className="hover:text-purple-600">
                  Pricing
                </a>
                <a href="#" className="hover:text-purple-600">
                  About Us
                </a>
                <a href="#" className="hover:text-purple-600">
                  Contact
                </a>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>© 2023 EATLY All Rights Reserved.</span>

              <div className="flex space-x-4">
                <img src="src/components/narased3/Socials.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Saf;
