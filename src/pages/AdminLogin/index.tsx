
import { useState, type FormEvent } from 'react';
import { supabase } from '../../lib/supabase';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const { data, error: loginError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (loginError) throw loginError;

      if (!data.session) {
        throw new Error('No login session was created.');
      }

      // This checks whether the signed-in user
      // is registered as an administrator.
      const { data: admin, error: adminError } =
        await supabase
          .from('admin_users')
          .select('user_id')
          .eq('user_id', data.user.id)
          .maybeSingle();

      if (adminError || !admin) {
        await supabase.auth.signOut();
        throw new Error(
          'This account does not have administrator access.'
        );
      }

      setMessage('Login successful. Administrator verified.');
      // Dashboard navigation will be added next.
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Login failed.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f5f7fb',
      padding: '24px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px',
        padding: '32px',
        background: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
      }}>
        <h1>Grandeur SME Manager</h1>
        <h2>Administrator Login</h2>
        <p>Founding 50 Pilot Management</p>

        <form onSubmit={handleLogin}>
          <label htmlFor="admin-email">Email</label>
          <input
            id="admin-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              margin: '8px 0 20px',
              boxSizing: 'border-box',
            }}
          />

          <label htmlFor="admin-password">Password</label>
          <input
            id="admin-password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              margin: '8px 0 20px',
              boxSizing: 'border-box',
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px',
              background: '#172554',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              cursor: loading ? 'wait' : 'pointer',
            }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        {error && (
          <p role="alert" style={{ color: '#b91c1c' }}>
            {error}
          </p>
        )}

        {message && (
          <p role="status" style={{ color: '#15803d' }}>
            {message}
          </p>
        )}
      </div>
    </main>
  );
}
