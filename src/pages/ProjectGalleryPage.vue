<template>
  <div class="bg-white">
    <div
                    data-aos="fade-up"
                    class="text-black flex justify-between items-center border-gray-100 pb-6 md:justify-start md:space-x-10"
                >
                    <div class="flex justify-start lg:w-0 lg:flex-1">
                        <router-link :to="{ name: 'Home' }">
                            <span class="sr-only">Globex Reengineering</span>
                            <img
                                class="h-12 mt-3 w-auto sm:h-24"
                                src="../assets/logo/globex-reengineering-logo.png"
                                alt=""
                            />
                        </router-link>
                    </div>
                    <div class="-mr-2 -my-2 md:hidden">
                        <PopoverButton
                            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span class="sr-only">Open menu</span>
                            <MenuIcon class="h-6 w-6" aria-hidden="true" />
                        </PopoverButton>
                    </div>
                    <PopoverGroup as="nav" class="hidden md:flex space-x-10">
                        <router-link
                            :to="{ name: 'Home' }"
                            class="text-lg hover:text-primary pb-1 link-underline"
                        >
                            <p>Home</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'Home', hash: '#about' }"
                            class="text-lg hover:text-primary pb-1 link-underline"
                        >
                            About
                        </router-link>
                        <router-link
                            :to="{ name: 'Products and Services' }"
                            class="text-lg hover:text-primary pb-1 link-underline"
                        >
                            Products and Services
                        </router-link>
                        <router-link
                            :to="{ name: 'Project Gallery' }"
                            class="text-lg hover:text-primary pb-1 link-underline"
                        >
                            Gallery
                        </router-link>

                        <router-link
                            :to="{ name: 'Home', hash: '#contact' }"
                            class="text-lg hover:text-primary pb-1 link-underline"
                        >
                            Contact
                        </router-link>
                    </PopoverGroup>
                    <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <router-link
                            :to="{ name: 'Home', hash: '#contact' }"
                            class="transition-colors duration-500 ease-in-out ml-8 whitespace-nowrap inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-primary hover:bg-dark"
                        >
                            Get a Quote
                        </router-link>
                    </div>
                </div>
    <div class="max-w-7xl mx-auto py-12 pt-0 px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <p
          class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight"
        >
          Gallery
        </p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          Images of our past projects
        </p>
      </div>
    </div>
  </div>

  <!-- Gallery -->

  <section class="pb-10 px-32">
    <div class="container">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div class="mb-10 group wow fadeInUp" data-wow-delay=".1s">
            <div class="rounded overflow-hidden mb-8">
              <img
                src="../assets/images/7m2-twopass-1.jpg"
                alt="image"
                class="w-full"
              />
            </div>
            <p class="text-base text-body-color">
              7 m3/hr Two Pass RO Water System
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div class="mb-10 group wow fadeInUp" data-wow-delay=".15s">
            <div class="rounded overflow-hidden mb-8">
              <img
                src="../assets/images/14m2-twopass-1.jpg"
                alt="image"
                class="w-full"
              />
            </div>

            <p class="text-base text-body-color">
              14 m3/hr Two Pass RO Water System
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div class="mb-10 group wow fadeInUp" data-wow-delay=".2s">
            <div class="rounded overflow-hidden mb-8">
              <a href="blog-details.html" class="block">
                <img
                  src="../assets/images/16m2-twopass-1.jpg"
                  alt="image"
                  class="w-full"
                />
              </a>
            </div>
            <div>
              <p class="text-base text-body-color">
                16 m3/hr Two Pass RO Water System
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="pt-4 pb-10 px-32">
    <div class="container">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div class="mb-10 group wow fadeInUp" data-wow-delay=".1s">
            <div class="rounded overflow-hidden mb-8">
              <img
                src="../assets/images/52m3-singlepass-2.jpg"
                alt="image"
                class="w-full"
              />
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div class="mb-10 group wow fadeInUp" data-wow-delay=".15s">
            <div class="rounded overflow-hidden mb-8">
              <img
                src="../assets/images/52m3-singlepass-3.jpg"
                alt="image"
                class="w-full"
              />
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div class="mb-10 group wow fadeInUp" data-wow-delay=".2s">
            <div class="rounded overflow-hidden mb-8">
              <a href="blog-details.html" class="block">
                <img
                  src="../assets/images/52m3-singlepass-4.jpg"
                  alt="image"
                  class="w-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="text-base text-center text-body-color">
        52 m3/hr Single Pass RO Water System
      </p>
    </div>
  </section>
  <section class="pt-20 pb-10 px-32">
    <div class="container">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div class="mb-10 group wow fadeInUp" data-wow-delay=".1s">
            <div class="rounded overflow-hidden mb-8">
              <img
                src="../assets/images/35-lpm-dialysis-2.jpg"
                alt="image"
                class="w-full"
              />
            </div>
            <div>
              <p class="text-base text-body-color">
                35 LPM RO Water System for Dialysis
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div class="mb-10 group wow fadeInUp" data-wow-delay=".15s">
            <div class="rounded overflow-hidden mb-8">
              <img
                src="../assets/images/pharmaceutical-1.png"
                alt="image"
                class="w-full"
              />
            </div>
            <div>
              <p class="text-base text-body-color">
                RO Water System for Pharmaceutical
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
