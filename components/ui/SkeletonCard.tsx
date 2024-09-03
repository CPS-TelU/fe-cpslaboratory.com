import { Skeleton } from "@/components/ui/skeleton"
import React from "react";

export function SkeletonCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[300px] w-[380px] rounded-xl bg-gray-200" />
      <div className="space-y-2">
      <div className="absolute inset-0 flex flex-col justify-end p-4 rounded-lg ">
        <div className="justify-end">
            <div className="absolute bottom-0 left-0 transform transition-all">
            <Skeleton className="h-4 w-[200px] bg-gray-300 absolute bottom-16 left-6  " />
            <Skeleton className="h-4 w-[300px] bg-gray-300 absolute bottom-8 left-6" />
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 px-4 sm:px-8 lg:px-16 max-width-[1200px]">
      
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
    <section className="mt-[130px]">
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

    </section>
  )
}