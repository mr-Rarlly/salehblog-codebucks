"use client";
import { FacebookProvider, CustomChat } from 'react-facebook';

export const FacbookMsg = () => {
  return (
    <FacebookProvider appId="7011338075645687" chatSupport>
        <CustomChat pageId="101844991638707" minimized={true.toString()}/>
      </FacebookProvider> 
  )
}

export default FacbookMsg;

