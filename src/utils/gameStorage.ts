
interface GameResult {
  score: number;
  wordsFound: string[];
  date: string;
}

interface PlayerProfile {
  name: string;
  avatar: string;
  totalGamesPlayed: number;
  highestScore: number;
  totalWordsFound: number;
}

// Save game result to localStorage
export const saveGameResult = (gameMode: string, result: GameResult) => {
  try {
    // Get existing results
    const existingResults = getGameResults(gameMode);
    
    // Add new result to beginning of array
    const updatedResults = [result, ...existingResults].slice(0, 10); // Keep only last 10 games
    
    localStorage.setItem(`wordRushArena_${gameMode}_results`, JSON.stringify(updatedResults));
    
    // Update high score if needed
    updateHighScore(gameMode, result.score);
    
    // Update profile stats
    updateProfileStats(result);
    
    return true;
  } catch (error) {
    console.error("Error saving game result:", error);
    return false;
  }
};

// Get all game results from localStorage
export const getGameResults = (gameMode: string): GameResult[] => {
  try {
    const results = localStorage.getItem(`wordRushArena_${gameMode}_results`);
    return results ? JSON.parse(results) : [];
  } catch (error) {
    console.error("Error retrieving game results:", error);
    return [];
  }
};

// Get high score for a specific game mode
export const getHighScore = (gameMode: string): number => {
  try {
    const highScore = localStorage.getItem(`wordRushArena_${gameMode}_highScore`);
    return highScore ? parseInt(highScore) : 0;
  } catch (error) {
    console.error("Error retrieving high score:", error);
    return 0;
  }
};

// Update high score if current score is higher
const updateHighScore = (gameMode: string, score: number) => {
  const currentHighScore = getHighScore(gameMode);
  
  if (score > currentHighScore) {
    localStorage.setItem(`wordRushArena_${gameMode}_highScore`, score.toString());
  }
};

// Update player profile statistics
const updateProfileStats = (result: GameResult) => {
  try {
    // Get existing profile or create new one
    const profileJson = localStorage.getItem("wordRushArena_profile");
    const profile: PlayerProfile = profileJson 
      ? JSON.parse(profileJson)
      : {
          name: "Player",
          avatar: "1",
          totalGamesPlayed: 0,
          highestScore: 0,
          totalWordsFound: 0,
        };
    
    // Update stats
    profile.totalGamesPlayed += 1;
    profile.highestScore = Math.max(profile.highestScore, result.score);
    profile.totalWordsFound += result.wordsFound.length;
    
    // Save updated profile
    localStorage.setItem("wordRushArena_profile", JSON.stringify(profile));
  } catch (error) {
    console.error("Error updating profile stats:", error);
  }
};

// Get player profile
export const getPlayerProfile = (): PlayerProfile => {
  try {
    const profileJson = localStorage.getItem("wordRushArena_profile");
    
    if (!profileJson) {
      // Return default profile
      return {
        name: "Player",
        avatar: "1",
        totalGamesPlayed: 0,
        highestScore: 0,
        totalWordsFound: 0,
      };
    }
    
    return JSON.parse(profileJson);
  } catch (error) {
    console.error("Error retrieving player profile:", error);
    return {
      name: "Player",
      avatar: "1",
      totalGamesPlayed: 0,
      highestScore: 0,
      totalWordsFound: 0,
    };
  }
};

// Update player profile
export const updatePlayerProfile = (updatedProfile: Partial<PlayerProfile>) => {
  try {
    const currentProfile = getPlayerProfile();
    const newProfile = { ...currentProfile, ...updatedProfile };
    
    localStorage.setItem("wordRushArena_profile", JSON.stringify(newProfile));
    return true;
  } catch (error) {
    console.error("Error updating player profile:", error);
    return false;
  }
};
