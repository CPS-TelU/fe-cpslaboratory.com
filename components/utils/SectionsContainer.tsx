// SectionContainer.tsx
import React from 'react';

const SectionContainer = ({ children, fullWidth }: { children: React.ReactNode, fullWidth?: boolean }) => {
    return (
        <section className={`flex flex-col justify-center items-center ${fullWidth ? 'w-full' : 'lg:max-w-screen-md lg:mx-auto'} mt-8 pb-16`}>
            {children}
        </section>
    );
};

export default SectionContainer;
