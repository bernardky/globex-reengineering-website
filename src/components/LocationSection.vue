<template>
    <div data-aos="fade-up" data-aos-duration="1000" class="relative bg-white">
        <div class="absolute inset-0">
            <div class="absolute inset-y-0 left-0 w-1/2" />
        </div>
        <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
            <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                <div class="max-w-lg mx-auto">
                    <h2 class="text-2xl text-gray-900 sm:text-3xl">Our Location</h2>
                    <p class="mt-3 text-lg">Main address:</p>
                    <p class="mt-3 text-md text-gray-500">
                        No.5, Lorong Asas Jaya 15, Kawasan Industri Ringan Asas Jaya, 14000 Bukit
                        Mertajam, Pulau Pinang
                    </p>
                    <p class="mt-3 text-lg">Address 2:</p>
                    <p class="mt-3 text-md text-gray-500">
                        No 16, Lorong Asas Murni 5 Kawasan Perniagaan Asas Murni 14000 Bukit
                        Mertajam Pulau Pinang Malaysia
                    </p>
                    <h2 class="text-2xl text-gray-900 sm:text-3xl mt-12">Business Hours</h2>
                    <p class="mt-3 text-lg text-gray-500">
                        Mon: 8:00 AM – 5:30 PM <br />
                        Tue: 8:00 AM – 5:30 PM<br />
                        Wed: 8:00 AM – 5:30 AM<br />
                        Thu: 8:00 AM – 5:30 PM<br />
                        Fri: 8:00 AM – 5:30 PM<br />
                        Sat: Closed<br />
                        Sun: Closed
                    </p>
                </div>
            </div>
            <div class="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                <div class="max-w-lg mx-auto lg:max-w-none">
                    <section class="w-full flex justify-center">
                        <div class="mapouter">
                            <div class="gmap_canvas">
                                <iframe
                                    width="600"
                                    height="500"
                                    id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=Globex%20Reengineering%20Sdn.%20Bhd.&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameborder="0"
                                    scrolling="no"
                                    marginheight="0"
                                    marginwidth="0"
                                ></iframe>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.mapouter {
    position: relative;
    text-align: right;
    height: 500px;
    width: 600px;
}
.gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 500px;
    width: 600px;
}
</style>
