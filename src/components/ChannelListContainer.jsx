import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'
import Chatlogo from '../assets/ChatLogo.png'
import LogoutIcon from '../assets/logout.png'
const SideBar = () => (
  <div className='channel-list__sidebar'>
    {/* Icon 1 */}
    <div className='channel-list__sidebar__icon1'>
      <div className='icon1__inner'>
        <img src={Chatlogo} alt="Hospital" width='30'/>

      </div>
    </div>

    {/* Icon 2 */}
    <div className='channel-list__sidebar__icon2'>
      <div className='icon1__inner'>
        <img src={LogoutIcon} alt="Logout" width='30'/>

      </div>
    </div>
  </div>
)

const CompanyHeader = () => (
  <div className='channel-list__header'>
    <p className='channel-list__header__text'>My Chat Pager</p>

  </div>
)

const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
      <div className='channel-list__list__wrapper'>
          <CompanyHeader />
          <ChannelSearch />
          <ChannelList 
            filters={{}}
            channelRenderFilterFn={() => {

            }}
            List = {(listProps) => (
              <TeamChannelList 
                {... listProps}
                type = 'team'
              />
            )}
            Preview = {(previewProps) => (
              <TeamChannelPreview 
                {... previewProps}
                type = 'team'
              />
            )}
          />

          <ChannelList 
            filters={{}}
            channelRenderFilterFn={() => {

            }}
            List = {(listProps) => (
              <TeamChannelList 
                {... listProps}
                type = 'messaging'
              />
            )}
            Preview = {(previewProps) => (
              <TeamChannelPreview 
                {... previewProps}
                type = 'messaging'
              />
            )}
          />
      </div>
    </>
  )
}

export default ChannelListContainer
