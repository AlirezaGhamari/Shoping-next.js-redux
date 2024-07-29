import { useAppDispatch } from '@/lib/hook';
import { showContant } from '@/lib/slices/contentPageSlice';
import React from 'react';

function ItemsForItem({ children ,id}: { children: React.ReactNode ,id:string}) {
    const dispatch = useAppDispatch();

    return (
        <div className='text-[14px]  cursor-pointer hover:-skew-x-12 hover:translate-x-5 hover:text-white hover:text-[15px] transition-all duration-500 ' onClick={() => dispatch(showContant(id))}>
            {children}
        </div>
    );
}

export default ItemsForItem;
