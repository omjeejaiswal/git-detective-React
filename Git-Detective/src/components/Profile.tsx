import React from 'react';

interface ProfileProps {
  userData: any;
}

const Profile: React.FC<ProfileProps> = ({ userData }) => {
  const {
    avatar_url,
    name,
    login,
    html_url,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    company,
  } = userData;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="profile-container bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="profile-header flex items-center mb-4">
        <img id="avatar" src={avatar_url} alt="avatar" className="w-20 h-20 rounded-full mr-4" />
        <div className="profile-info-wrapper">
          <div className="profile-name mb-2">
            <h2 id="name" className="text-2xl font-bold">{name || login}</h2>
            <a href={html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">@{login}</a>
          </div>
          <p id="date" className="text-gray-500">Joined {formatDate(created_at)}</p>
        </div>
      </div>
      <p id="bio" className="mb-4">{bio || "This profile has no bio"}</p>
      <div className="profile-stats-wrapper bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4 flex justify-between">
        <div className="profile-stat text-center">
          <p className="stat-title text-sm">Repos</p>
          <p id="repos" className="stat-value text-lg font-bold">{public_repos}</p>
        </div>
        <div className="profile-stat text-center">
          <p className="stat-title text-sm">Followers</p>
          <p id="followers" className="stat-value text-lg font-bold">{followers}</p>
        </div>
        <div className="profile-stat text-center">
          <p className="stat-title text-sm">Following</p>
          <p id="following" className="stat-value text-lg font-bold">{following}</p>
        </div>
      </div>
      <div className="profile-bottom-wrapper flex flex-wrap">
        <div className="profile-info flex items-center w-full mb-2">
          <img src="./assets/images/location-icon.svg" alt="location" className="bottom-icons w-5 h-5 mr-2" />
          <p id="location" className="text-gray-700 dark:text-gray-200">{location || "Not Available"}</p>
        </div>
        <div className="profile-info flex items-center w-full mb-2">
          <img src="./assets/images/website-icon.svg" alt="website" className="bottom-icons w-5 h-5 mr-2" />
          <a href={blog || "#"} id="page" className="text-blue-500">{blog || "Not Available"}</a>
        </div>
        <div className="profile-info flex items-center w-full mb-2">
        <img src="./assets/images/twitter-icon.svg" alt="twitter" className="bottom-icons w-5 h-5 mr-2" />
          <a href={`https://twitter.com/${twitter_username}`} id="twitter" className="text-blue-500">{twitter_username || "Not Available"}</a>
        </div>
        <div className="profile-info flex items-center w-full mb-2">
          <img src="./assets/images/company-icon.svg" alt="company" className="bottom-icons w-5 h-5 mr-2" />
          <p id="company" className="text-gray-700 dark:text-gray-200">{company || "Not Available"}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
