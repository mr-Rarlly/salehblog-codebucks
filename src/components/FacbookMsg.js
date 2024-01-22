"use client";
import { FacebookProvider, MessageUs } from 'react-facebook';

export const FacbookMsg = () => {
  return (
    <FacebookProvider appId="7011338075645687" chatSupport>
        <MessageUs pageId="101844991638707" minimized={true.toString()}/>
      </FacebookProvider> 
  )
}

export default FacbookMsg;

