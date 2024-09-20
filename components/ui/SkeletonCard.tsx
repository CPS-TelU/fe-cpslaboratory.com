import { Skeleton } from "@/components/ui/skeleton"
import React from "react";

export function SkeletonBlog() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 animate-pulse">
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[300px] lg:h-[250px] md:h-[200px] xl:w-[360px] lg:w-[300px] md:w-[250px] w-[320px] rounded-xl bg-gray-200" />
      <div className="space-y-2">
      <div className="absolute inset-0 flex flex-col justify-end p-4 rounded-lg ">
        <div className="justify-end">
            <div className="absolute bottom-0 left-0 transform transition-all">
            <Skeleton className="h-4 w-[150px] md:w-[100px] bg-gray-300 absolute bottom-16 left-6  " />
            <Skeleton className="h-4 w-[250px] xl:w-[250px] lg:w-[300px] md:w-[150px] bg-gray-300 absolute bottom-8 left-6" />
            </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}


export function SkeletonCardHome() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 px-4 sm:px-8 lg:px-16 max-width-[1200px] animate-pulse">
      
      {/* First Skeleton (large card) */}
      <div className="col-span-2 flex flex-col space-y-3 rounded-lg overflow-hidden cursor-pointer ">
        <Skeleton className="h-[400px] w-[800px] rounded-lg bg-gray-300" />
        <div className="text-left p-4 space-y-2">
          <Skeleton className="h-2 w-[180px] bg-gray-300" />
          <Skeleton className="h-4 w-[700px] bg-gray-300" />
          <Skeleton className="h-4 w-[700px] bg-gray-300" />
          <Skeleton className="h-4 w-[200px] bg-gray-300" />
        </div>
      </div>
      
      {/* Second Skeleton (small cards grid) */}
      <div className="grid grid-rows-3 gap-8">
        {Array(3).fill(0).map((_, index) => (
          <div key={index} className="relative group flex flex-col space-y-3">
            <Skeleton className="h-[200px] w-[300px] sm:w-[200px] md:w-[230px] lg:w-[300px] xl:w-[400px]   rounded-lg bg-gray-200" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 rounded-lg">
              <div className="justify-end transform transition-all">
                <Skeleton className="h-4 w-[150px] md:w-[100px] bg-gray-300 absolute bottom-14 left-4" />
                <Skeleton className="h-4 w-[250px] md:w-[150px] bg-gray-300 absolute bottom-6 left-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export function SkeletonDetailBlog() {
  return (
    <section className="mt-[130px] animate-pulse">
      <article style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <header>
          <Skeleton className="h-6 w-64 bg-gray-300" />
          <br/>
          <Skeleton className="h-4 w-32 bg-gray-300" />
        </header>
        <div style={{ margin: "20px 0" }}>
          <Skeleton className="h-[400px] w-[1100px] bg-gray-300"/>
        </div>
        <section className="max-w-[1200px] mb-8 ">
          <Skeleton className="h-6 w-[1100px] bg-gray-300" />
          <br/>
          <Skeleton className="h-6 w-[1100px] bg-gray-300" />
          <br/>
          <Skeleton className="h-6 w-[400px] bg-gray-300" />
        </section>
      </article>
      <div className="mb-8">
        <Skeleton className="h-10 w-[400px] bg-gray-300 ml-36" />
      </div>
      <div className="w-full flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1200px] w-full px-4">
    {Array(3).fill(0).map((_, index) => (
      <div key={index} className="relative group flex flex-col space-y-3 gap-2">
        <Skeleton className="h-[280px] w-full max-w-[400px] rounded-lg bg-gray-300" />
        <div className="absolute inset-0 flex flex-col justify-end p-4 rounded-lg">
          <div className="justify-end transform transition-all">
            <Skeleton className="h-6 w-[200px] bg-gray-400 absolute bottom-16 left-6" />
            <Skeleton className="h-4 w-[200px] bg-gray-400 absolute bottom-8 left-6" />
            <Skeleton className="h-4 w-[100px] bg-gray-400 absolute bottom-2 left-6" />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      

    </section>
  )
}



export function SkeletonHomeHero() {
  return (
    <div className="relative w-[350px] h-[200px] sm:h-[500px] md:w-[700px] md:h-[350px] lg:w-[1000px] lg:h-[500px] animate-pulse">
    <div className="absolute inset-0 z-10 bg-black opacity-50 rounded-2xl">
      <div>
      <Skeleton className="w-[380px] h-[200px] sm:h-[500px] md:w-[700px] md:h-[350px] lg:w-[1000px] lg:h-[500px] rounded-xl bg-gray-200" />
      </div>
      <div className="space-y-2">
      <div className="absolute bottom-0 left-0 z-20 flex flex-col items-start justify-start p-6 sm:p-8 lg:p-12">
        <div className="justify-end">
            <div className="absolute bottom-0 left-0 transform transition-all">
            <Skeleton className="h-2 sm:h-4 md:h-4 lg:h-4 xl:h-4 w-[100px] sm:w-[500px] md:w-[500px] lg:w-[500px] xl:w-[250px] bg-gray-300 absolute bottom-14 left-8  sm:bottom-28 md:bottom-28 lg:bottom-28 xl:bottom-28 2xl:bottom-28 sm:left-12 md:left-12 xl:left-12 lg:left-12 2xl:left-12" />
            <Skeleton className="h-4 sm:h-8 md:h-8 lg:h-8 xl:h-8 w-[200px] sm:w-[500px] md:w-[500px] xl:w-[650px] lg:w-[650px] bg-gray-300 absolute bottom-8 sm:bottom-14 md:bottom-14 lg:bottom-14 xl:bottom-14 2xl:bottom-14 left-8 sm:left-12 md:left-12 xl:left-12 lg:left-12 2xl:left-12" />
            </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export function SkeletonHomeInformation() {
  return (
    <section className="py-18 flex items-center justify-end">
      <div className="animate-pulse">
        <div className="flex flex-col items-center justify-center mb-6">
          <Skeleton className="h-8 md:h-10 lg:h-8 xl:h-12 sm:h-[5vw] w-[200px] xl:w-[300px] lg:w-[400px] md:w-[300px] sm:w-[300px] bg-gray-300 rounded-md mb-12" />
          <Skeleton className="h-4 md:h-6 lg:h-6 xl:h-6 w-[350px] xl:w-[600px] lg:w-[500px] md:w-[500px] bg-gray-300 rounded-md mb-2" />
          <Skeleton className="h-4 md:h-6 lg:h-6 xl:h-6 w-[300px] xl:w-[500px] lg:w-[445px] md:w-[445px] bg-gray-300 rounded-md mb-10" />
        </div>
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 px-3">
          {Array(3).fill(0).map((_, index) => (
            <div
              key={index}
              className=" w-full sm:w-[30vw] md:w-[28vw] lg:w-[26vw] xl:w-[300px] h-[40vw] sm:h-[22vw] md:h-[30vw] lg:h-[20vw] xl:h-[15vw] rounded-lg bg-gray-300 overflow-hidden"
            >
              <div className="relative w-full sm:w-[30vw] md:w-[28vw] lg:w-[28vw] h-[30vw] sm:h-[24vw] md:h-[22vw] lg:h-[15vw] xl:h-[10vw]">
                <Skeleton className="w-full h-full bg-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export function SkeletonActivity() {
  return (
    <section className="py-18 flex items-center justify-center overflow-hidden">
      <div className="animate-pulse w-full">
        <div className="flex flex-col items-center justify-center mb-6 mt-20">
          <Skeleton className="h-12 md:h-8 lg:h-12 sm:h-[5vw] w-[300px]  bg-gray-300 rounded-md mb-12"/>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-3 gap-8 px-3 ">
          {Array(3).fill(0).map((_, index) => (
            <div key={index} className="relative group flex flex-col space-y-3 gap-8">
              <Skeleton className="h-[280px] w-[400px] rounded-lg bg-gray-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 rounded-lg">
                <div className="justify-end transform transition-all">
                  <Skeleton className="h-6 w-[200px] bg-gray-400 absolute bottom-16 left-6" />
                  <Skeleton className="h-4 w-[200px] bg-gray-400 absolute bottom-8 left-6" />
                  <Skeleton className="h-4 w-[100px] bg-gray-400 absolute bottom-2 left-6" />
                  <Skeleton className="h-8 w-20 rounded-xl bg-gray-400 absolute bottom-8 right-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




export function SkeletonBlogHero() {
  return (
    <div className="relative w-[350px] h-[200px] sm:h-[500px] md:w-[700px] md:h-[350px] lg:w-[1000px] xl:w-[1100px] lg:h-[500px] animate-pulse">
    <div className="absolute inset-0 z-10 bg-black opacity-50 rounded-2xl">
      <div>
      <Skeleton className="w-[350px] h-[200px] sm:h-[500px] md:w-[700px] md:h-[350px] lg:w-[1000px] xl:w-[1100px] lg:h-[500px] rounded-xl bg-gray-200" />
      </div>
      <div className="space-y-2">
      <div className="absolute bottom-0 left-0 z-20 flex flex-col items-start justify-start p-6 sm:p-8 lg:p-12">
        <div className="justify-end">
            <div className="absolute bottom-0 left-0 transform transition-all">
            <Skeleton className="h-8 w-[150px] bg-gray-300 absolute bottom-28 left-12  " />
            <Skeleton className="h-8 w-[500px] lg:w-[650px] bg-gray-300 absolute bottom-14 left-12" />
            </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}
