"use client";

import React from "react";
import { HiHome, HiOutlineShoppingCart, HiUsers, HiTag, HiSparkles } from 'react-icons/hi';
import Button from "../../elements/Button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function MenuMobile() {
    return (
        <div className="lg:hidden p-3 bg-[#f0f0f0] border-t border-[#dbdbdb] absolute w-full shadow-lg shadow-[#00000017]">
            <Accordion type="single" collapsible>
                {/* Home Menu */}
                <AccordionItem value="home">
                    <AccordionTrigger className="font-medium hover:bg-[#6a97d4] hover:text-white">
                        <HiHome size={15} className='fill-current w-4 h-4 mr-3' />
                        Home
                    </AccordionTrigger>
                    <AccordionContent className="pl-8">
                        <Button text="Introduction Ludesc" href="/" />
                        <Button text="Our Vision" href="/home/vision" />
                        <Button text="Products" href="/home/products" />
                        <Button text="Achievement" href="/home/achievement" />
                        <Button text="Team" href="/home/team" />
                    </AccordionContent>
                </AccordionItem>

                {/* Products Menu */}
                <AccordionItem value="products">
                    <AccordionTrigger className="mt-2 font-medium hover:bg-[#6a97d4] hover:text-white">
                        <HiTag size={15} className='fill-current w-4 h-4 mr-3' />
                        Products
                    </AccordionTrigger>
                    <AccordionContent>
                        <Button text="Products" href="/products" />
                    </AccordionContent>
                </AccordionItem>
                
                {/* Price Menu */}
                <AccordionItem value="price">
                    <AccordionTrigger className="mt-2 font-medium hover:bg-[#6a97d4] hover:text-white">
                        <HiOutlineShoppingCart size={15} className='fill-current w-4 h-4 mr-3' />
                        Price
                    </AccordionTrigger>
                    <AccordionContent className="pl-8">
                        <Button text="Service Offer" href="/price/service-offer" />
                        <Button text="Playground" href="/price/playground" />
                        <Button text="Product" href="/price/product" />
                        <Button text="Achievement" href="/price/achievement" />
                        <Button text="Team" href="/price/team" />
                    </AccordionContent>
                </AccordionItem>

                {/* Achievement Menu */}
                <AccordionItem value="achievement">
                    <AccordionTrigger className="mt-2 font-medium hover:bg-[#6a97d4] hover:text-white">
                        <HiSparkles size={15} className='fill-current w-4 h-4 mr-3' />
                        Achievement
                    </AccordionTrigger>
                    <AccordionContent>
                        <Button text="Achievement" href="/achievement" />
                    </AccordionContent>
                </AccordionItem>

                {/* About Menu */}
                <AccordionItem value="about">
                    <AccordionTrigger className="mt-2 font-medium hover:bg-[#6a97d4] hover:text-white">
                        <HiUsers size={15} className='fill-current w-4 h-4 mr-3' />
                        About
                    </AccordionTrigger>
                    <AccordionContent className="pl-8">
                        <Button text="Our Mission" href="/about/mission" />
                        <Button text="Our Vision" href="/about/vision" />
                        <Button text="Achievement" href="/about/achievement" />
                        <Button text="Team" href="/about/team" />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
