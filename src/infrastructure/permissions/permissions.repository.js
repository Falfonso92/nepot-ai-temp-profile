import { supabase } from '../storage/supabase.client.js';

export async function getUserPermissions(userId) {
  if (!supabase) return [];
  const { data, error } = await supabase.rpc('get_user_permissions', { p_user_id: userId });
  if (error) return [];
  return data.map(r => r.permission);
}

export async function getRoles() {
  if (!supabase) return [];
  const { data, error } = await supabase.from('roles').select('*').order('name');
  if (error) return [];
  return data;
}

export async function getActions() {
  if (!supabase) return [];
  const { data, error } = await supabase.from('actions').select('*').order('name');
  if (error) return [];
  return data;
}

export async function getRolePermissions() {
  if (!supabase) return [];
  const { data, error } = await supabase.from('role_permissions').select('*');
  if (error) return [];
  return data;
}

export async function createRole(name, description) {
  const { data, error } = await supabase.from('roles').insert({ name, description }).select().single();
  if (error) throw error;
  return data;
}

export async function updateRole(id, name, description) {
  const { error } = await supabase.from('roles').update({ name, description }).eq('id', id);
  if (error) throw error;
}

export async function deleteRole(id) {
  const { error } = await supabase.from('roles').delete().eq('id', id);
  if (error) throw error;
}

export async function createAction(name, description) {
  const { data, error } = await supabase.from('actions').insert({ name, description }).select().single();
  if (error) throw error;
  return data;
}

export async function updateAction(id, name, description) {
  const { error } = await supabase.from('actions').update({ name, description }).eq('id', id);
  if (error) throw error;
}

export async function deleteAction(id) {
  const { error } = await supabase.from('actions').delete().eq('id', id);
  if (error) throw error;
}

export async function addRolePermission(roleId, actionId) {
  const { error } = await supabase.from('role_permissions').insert({ role_id: roleId, action_id: actionId });
  if (error) throw error;
}

export async function removeRolePermission(roleId, actionId) {
  const { error } = await supabase.from('role_permissions')
    .delete().eq('role_id', roleId).eq('action_id', actionId);
  if (error) throw error;
}

export async function getUserRoles(userId) {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('user_roles')
    .select('id, user_id, role_id, roles(name, description)')
    .eq('user_id', userId);
  if (error) return [];
  return data;
}

export async function assignRoleToUser(userId, roleId) {
  const { error } = await supabase.from('user_roles').insert({ user_id: userId, role_id: roleId });
  if (error) throw error;
}

export async function revokeRoleFromUser(userId, roleId) {
  const { error } = await supabase.from('user_roles').delete().eq('user_id', userId).eq('role_id', roleId);
  if (error) throw error;
}
