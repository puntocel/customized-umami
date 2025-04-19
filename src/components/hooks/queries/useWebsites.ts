import { useApi } from '../useApi';
import { usePagedQuery } from '../usePagedQuery';
import { useLogin } from './useLogin';
import useModified from '../useModified';
import { useStore } from 'zustand';
import { getClientAuthToken } from '@/lib/client';
import { SHARE_TOKEN_HEADER } from '@/lib/constants';
// const selector = (state: { shareToken: { token?: string } }) => state.shareToken;

export function useWebsites(
  { userId, teamId }: { userId?: string; teamId?: string },
  params?: { [key: string]: string | number },
) {
  const { get } = useApi();
  const { user } = useLogin();
  // console.log(user)
  const { modified } = useModified(`websites`);

  // const shareToken = useStore(selector);
  // const defaultHeaders = {
  //   authorization: `Bearer ${getClientAuthToken()}`,
  //   [SHARE_TOKEN_HEADER]: shareToken?.token,
  // };




  return usePagedQuery({
    queryKey: ['websites', { userId, teamId, modified, ...params }],
    queryFn: (data: any) => {
      return get(teamId ? `/teams/${teamId}/websites` : `/users/${userId || user.id}/websites`, {
        ...data,
        ...params,
      });
    },
  });
}

export default useWebsites;
