"use client";
import React, { useState } from "react";
import Header from "../components/Header";

export default function HeaderLayout({ children }:any) {

  return (
    <>
                <div >
                    <div className="fixed top-0 w-screen bg-white z-50">

                    <Header/>
                    </div>
    
     
                               <div className="h-full pt-[13%]">

                {children}
            </div>
            </div>

    </>
  );
};

