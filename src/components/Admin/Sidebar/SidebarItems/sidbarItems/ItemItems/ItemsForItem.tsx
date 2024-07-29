import { useAppDispatch } from '@/lib/hook';
import { showContant } from '@/lib/slices/contentPageSlice';
import React from 'react';

function ItemsForItem({ children ,id}: { children: React.ReactNode ,id:string}) {
    const dispatch = useAppDispatch();

    return (
        <div onClick={() => dispatch(showContant(id))}>
            {children}
        </div>
    );
}

export default ItemsForItem;
