import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://leaguewrangler.com/graphql',
  documents: 'src/graphql/{mutations,queries}/*.ts',
  generates: {
    './src/graphql/types/globalTypes.ts': {
      plugins: ['typescript'],
    },
    './src/graphql/': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'types/globalTypes.ts',
        extension: '.ts',
        folder: '../types',
      },
      plugins: ['typescript-operations'],
    },
  },
  config: {
    namingConvention: {
      typeNames: 'change-case-all#pascalCase',
      enumValues: 'change-case-all#upperCase',
    },
  },
  ignoreNoDocuments: true,
};

export default config;
