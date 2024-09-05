import { Skeleton } from "@/components/ui/skeleton"
import React from "react";

export function SkeletonCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-pulse">
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[300px] lg:w-[400px] w-[320px] rounded-xl bg-gray-200" />
      <div className="space-y-2">
      <div className="absolute inset-0 flex flex-col justify-end p-4 rounded-lg ">
        <div className="justify-end">
            <div className="absolute bottom-0 left-0 transform transition-all">
            <Skeleton className="h-4 w-[200px] bg-gray-300 absolute bottom-16 left-6  " />
            <Skeleton className="h-4 w-[250px] lg:w-[300px] bg-gray-300 absolute bottom-8 left-6" />
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
            <Skeleton className="h-[200px] w-[400px] rounded-lg bg-gray-200" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 rounded-lg">
              <div className="justify-end transform transition-all">
                <Skeleton className="h-4 w-[200px] bg-gray-300 absolute bottom-16 left-6" />
                <Skeleton className="h-4 w-[300px] bg-gray-300 absolute bottom-8 left-6" />
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
    <div className="relative w-[350px] h-[200px] sm:h-[500px] md:w-[700px] md:h-[350px] lg:w-[1300px] lg:h-[600px] animate-pulse">
    <div className="absolute inset-0 z-10 bg-black opacity-50 rounded-2xl">
      <div>
      <Skeleton className="w-[350px] h-[200px] sm:h-[500px] md:w-[700px] md:h-[350px] lg:w-[1300px] lg:h-[600px] rounded-xl bg-gray-200" />
      </div>
      <div className="space-y-2">
      <div className="absolute bottom-0 left-0 z-20 flex flex-col items-start justify-start p-6 sm:p-8 lg:p-12">
        <div className="justify-end">
            <div className="absolute bottom-0 left-0 transform transition-all">
            <Skeleton className="h-4 w-[300px] bg-gray-300 absolute bottom-32 left-12  " />
            <Skeleton className="h-8 w-[500px] lg:w-[900px] bg-gray-300 absolute bottom-16 left-12" />
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
    <div className="animate-pulse ">
      <div className="flex flex-col items-center justify-center mb-6">
      <Skeleton className="h-8 md:h-8 lg:h-8 sm:h-[5vw] w-[300px] bg-gray-300 rounded-md mb-12"/>
      <Skeleton className="h-6 md:h-4 lg:h-4 w-[500px] bg-gray-300 rounded-md mb-2"/>
      <Skeleton className="h-6 md:h-4 lg:h-4 w-[450px] bg-gray-300 rounded-md mb-10"/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-3">
        {Array(3).fill(0).map((_, index) => (
          <div key={index} className="bg-gray-300  rounded-lg">
            <Skeleton className="w-[380px] h-[280px] bg-gray-300"/>
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
          <Skeleton className="h-12 md:h-8 lg:h-12 sm:h-[5vw] w-[300px] bg-gray-300 rounded-md mb-12"/>
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

