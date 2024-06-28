import getUserBalance from '@/app/action/getUserBalance';
import { addCommas } from '@/libs/utils';
import React from 'react'
import { ShowBalance } from './ShowBalance';


export const Balance = async () => {
  const { balance } = await getUserBalance();
  return (
    <ShowBalance balance={Number(balance)} />
  )
}
