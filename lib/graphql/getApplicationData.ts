// file: app/lib/graphql/getApplicationData.ts

// -----------------------------------------
// TEST DATA (active code for now)
// -----------------------------------------
// const testDataBySlug: Record<string, any> = {
//   figma: {
//     id: '123',
//     title: 'Figma',
//     icon: {
//       url: 'com.figma.mirror_2024-08-23-084010_qfuq.webp', // Pretend path
//     },
//     apkFile: {
//       url: '/test-figma.apk',
//     },
//     appCategory: {
//       id: 'cat-456',
//       title: 'Productivity apps',
//     },
//     rating: '4.1',
//     developer: 'Figma Inc.',
//     downloadAmount: '1M',
//     license: 'Free',
//     blocks: [
//       {
//         __typename: 'blocks_titleText_BlockType',
//         mainTitle: 'About this app',
//         text: `Envision a boundless digital canvas...`,
//       },
//       {
//         __typename: 'blocks_titleText_BlockType',
//         mainTitle: 'Why Figma',
//         text: `Real-time collaboration: Figma amplifies team collaboration...`,
//       },
//       {
//         __typename: 'blocks_conclusion_BlockType',
//         mainTitle: 'Verdict Figma app',
//         text: `To sum it up, Figma is not just another app; it's a revolutionary tool...`,
//       },
//       {
//         __typename: 'blocks_prosAndCons_BlockType',
//         pros: [{ pro: 'Editing of vector graphics' }, { pro: '...' }],
//         cons: [{ con: 'High learning gradient' }, { con: '...' }],
//       },
//     ],
//   },
//   // Add more test slugs here if you like
// }

/**
 * STUBBED function: Currently returns test data from the above dictionary.
 * Once you have your GraphQL auth token, you can UNCOMMENT the GraphQL logic
 * below (and remove or comment out this test data code).
 */
// export async function getApplicationData(locale: string, slug: string) {
//   // We’ll just ignore `locale` for the test data example,
//   // but you could use it if you wanted to differentiate data by locale.
//   const data = testDataBySlug[slug]
//   return data || null
// }


// ------------------------------------------------------------------------------
// REAL GRAPHQL CODE (commented out) - UNCOMMENT when you have your token & want
// to fetch from the actual endpoint. Remove or comment out the test data code.
// ------------------------------------------------------------------------------


const API_ENDPOINT = process.env.BOA_API_ENDPOINT!; // Set your API endpoint
const API_TOKEN = process.env.BOA_API_TOKEN!; // Set your API token

export async function getApplicationData(locale: string, slug: string) {
  const siteHandle = getSiteHandle(locale);

  const query = `
    query application($site: [String!], $slug: [String!]) {
      appArticleEntries(site: $site, slug: $slug, limit: 1) {
        ...on appArticle_appArticle_Entry {
          id
          title
          icon {
            url
          }
          apkFile {
            url
          }
          appCategory {
            ...on appCategory_appCategory_Entry {
              id
              title
            }
          }
          rating
          developer
          downloadAmount
          license
          appDownloads {
            url
            type
            platform
            identifier
          }
          blocks {
            ...on blocks_titleText_BlockType {
              mainTitle
              text
            }
            ...on blocks_list_BlockType {
              mainTitle
              items {
                item
              }
            }
            ...on blocks_prosAndCons_BlockType {
              pros {
                pro
              }
              cons {
                con
              }
            }
            ...on blocks_conclusion_BlockType {
              mainTitle
              text
            }
          }
        }
      }
    }
  `;

  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables: {
        site: [siteHandle],
        slug: [slug],
      },
    }),
  });

  const contentType = response.headers.get('Content-Type') || '';
  if (!contentType.includes('application/json')) {
    const errorText = await response.text();
    console.error('Non-JSON Response:', errorText);
    throw new Error('Received non-JSON response from server.');
  }

  if (!response.ok) {
    throw new Error(`GraphQL request failed with status ${response.statusText}`);
  }

  const { data, errors } = await response.json();

  if (errors) {
    console.error('GraphQL Errors:', errors);
    throw new Error('Error fetching application data.');
  }

  const applicationData = data.appArticleEntries?.[0];
  if (!applicationData) {
    console.error('No application found for slug:', slug);
    return null;
  }

  return applicationData;
}

// Helper function to map locale to site handle
function getSiteHandle(locale: string): string {
  switch (locale.toLowerCase()) {
    case 'en-us':
      return 'bestOfAppsEnglishUnitedStates';
    default:
      throw new Error(`Unsupported locale: ${locale}`);
  }
}
