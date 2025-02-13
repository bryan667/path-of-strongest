const { VITE_API_URL, VITE_DEFAULT_ACCOUNT_NAME, VITE_DEFAULT_CHARACTER_NAME } =
  import.meta.env;

export const fetchCharacterData = async ({
  accountName,
  characterName,
}: {
  accountName?: string | null;
  characterName?: string | null;
}) => {
  const params = new URLSearchParams({
    accountName: accountName || VITE_DEFAULT_ACCOUNT_NAME,
    character: characterName || VITE_DEFAULT_CHARACTER_NAME,
  });

  try {
    const response = await fetch(
      `${VITE_API_URL}/api/poeOne/getItems?${params}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching items data:', error);
    return { error, hasError: true };
  }
};

export const fetchCharactersByRealm = async ({
  accountName,
  realm,
}: {
  accountName?: string | null;
  realm?: string | null;
}) => {
  const params = new URLSearchParams({
    accountName: accountName || VITE_DEFAULT_ACCOUNT_NAME,
  });

  if (realm) {
    params.append('realm', realm);
  }

  try {
    const response = await fetch(
      `${VITE_API_URL}/api/poeOne/getCharacters?${params}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching character data:', error);
    return { error, hasError: true };
  }
};

export const strongestCharacters = [
  { name: 'BoyFrenzyWowo', level: '99' },
  { name: 'IsThisHexblastWowo', level: '96' },
  { name: 'WhereIsMirrorWowo', level: '98' },
  { name: 'DespiseHeresyWowo', level: '99' },
  { name: 'RighteousFireShadowowo', level: '98' },
  { name: 'BgyTanod', level: '93' },
  { name: 'CracklingGrandfather', level: '93' },
];
